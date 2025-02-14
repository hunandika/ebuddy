import { db } from '#config/firebaseConfig'
import { User } from '#entities/user'
import { Meta } from '#entities/meta'

const userCollection = db.collection('users')

export class UserRepository {
    async create(user: User): Promise<User | null> {
        const dateNow = new Date()
        const newUser = await userCollection.add({
            name: user.name,
            email: user.email,
            gender: user.gender,
            createdAt: dateNow.toISOString(),
            updatedAt: dateNow.toISOString(),
            isDeleted: false,
        })

        const userCreated = await userCollection.doc(newUser.id).get()
        return { ...userCreated.data() } as User
    }

    async findAll(limit: number = 10, page: number = 1): Promise<{ users: User[]; meta: Meta | null }> {
        const offset = (page - 1) * limit
        const totalSnapshot = await userCollection.where('isDeleted', '==', false).get()
        const snapshot = await userCollection.where('isDeleted', '==', false).orderBy('createdAt').offset(offset).limit(limit).get()

        const users = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as User[]
        const totalData = totalSnapshot.size
        return {
            users,
            meta: {
                page,
                limit,
                totalData,
            },
        }
    }

    async findById(id: string): Promise<User | null> {
        const doc = await userCollection.doc(id).get()
        const userData = { id: doc.id, ...doc.data() } as User
        if (!doc.exists || userData.isDeleted) {
            return null
        }
        return userData
    }

    async update(user: User): Promise<User | null> {
        const dateNow = new Date()
        const doc = userCollection.doc(user.id)
        const docSnap = await doc.get()
        const userData = docSnap.data() as User

        if (!docSnap.exists || userData.isDeleted) {
            return null
        }

        await doc.update({
            name: user.name,
            email: user.email,
            gender: user.gender,
            updatedAt: dateNow.toISOString(),
        })

        const updatedUserSnap = await doc.get()
        return { id: user.id, ...updatedUserSnap.data() } as User
    }

    async delete(id: string): Promise<boolean> {
        const doc = userCollection.doc(id)
        const docSnap = await doc.get()
        const userData = docSnap.data() as User

        if (!docSnap.exists || userData.isDeleted) {
            return false
        }

        await doc.update({
            isDeleted: true,
        })

        return true
    }
}

import { auth } from '#config/firebaseConfig'
import { DecodedIdToken } from 'firebase-admin/auth'

export class AuthRepository {
    async verify(idToken: string): Promise<DecodedIdToken | null> {
        const decodedToken = await auth.verifyIdToken(idToken)
        return decodedToken
    }
}

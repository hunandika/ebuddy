export interface User {
    id: string
    name: string
    email: string
    gender: string
    createdAt: string
    updatedAt: string
    isDeleted: boolean
    totalAverageWeightRatings: number
    numberOfRents: number
    recentlyActive: number
    rankingScore: number
}

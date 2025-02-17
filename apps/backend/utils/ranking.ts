import { User } from '@repo/entities/user'

/**
 * Calculates the ranking score for a user based on three factors:
 * 1. **Total Average Weighted Ratings** (Highest priority, multiplied by 1000)
 * 2. **Number of Rents** (Second priority, multiplied by 10)
 * 3. **Recent Activity** (Used as a tiebreaker, divided by 1e10)
 *
 * This ensures proper sorting in Firestore, allowing efficient queries with pagination.
 */
export const RankScore = (user: User): number => {
    const rankingScore =
        (user.totalAverageWeightRatings || 0) * 1000 + // Ensures ratings have the highest impact
        (user.numberOfRents || 0) * 10 + // Gives moderate weight to rental count
         user.recentlyActive / 1e10 // Small influence, only for tiebreaking
    return rankingScore || 0
}

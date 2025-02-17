# 📄 Ebuddy Technical Test Backend Repository

Welcome to **Ebuddy Technical Test**! 🚀 This service created especially for ebuddy technical test

---

## 🌟 Features
- **User Auth**: User login and register.
- **Manage User**: Handle CRUD user.

---

## 🚀 Getting Started

### Prerequisites
Ensure you have the following installed:

- Node.js (v22 or later)
- npm (v10 or later)

### Installation

1. Clone the repository:
   ```bash
   git clone git@github.com:hunandika/ebuddy.git
   cd ebuddy
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up the environment variables:
    - Copy `.env.sample` as `.env` file in the root directory.
    - Fill the necessary values in the `.env` file.

5. Start the server:
   - Option 1
      ```bash
      npm run dev
      ```
      The server will start on `http://localhost:3001`

    - Option 2
   ```bash
   npm run build && firebase emulators:start --only functions
   ```
   The server will start on `http://127.0.0.1:5001/ebuddy-2660d/asia-southeast1/api`

---


## 📖 API Documentation
### In this backend repo, I provide `ebuddy.postman_collection.json` to simply testing purpose

### Base URL
- `http://localhost:3001`
- `http://127.0.0.1:5001/ebuddy-2660d/asia-southeast1/api`

### Endpoints

#### 1. **Auth**
   - ##### **Verify Token**
      `POST /v1/auth/verify`
      - **Description**: Verify token and get user information.
      - **Request Headers**:
         - `Content-Type: application/json`
         - `Authorization: Bearer {{BEARER_TOKEN}}`
      - **Response**:
         ```json
         {
            "statusCode": 200,
            "data": {
               "id": "adZovKYwL8eheNaiXp4ZRSUKomq1",
               "createdAt": "2025-02-15T19:22:20.419Z",
               "isDeleted": false,
               "numberOfRents": 56,
               "totalAverageWeightRatings": 4.8,
               "gender": "M",
               "email": "testing1@gmail.com",
               "name": "testing 1",
               "updatedAt": "2025-02-16T21:02:50.294Z",
               "recentlyActive": 1739740266487,
               "rankingScore": 5533.9740266487
            },
            "message": "User verified successfully"
            }
         ```
      - **Error Response**:
         ```json
         {
            "message": "Authenticate token failed",
            "statusCode": 401
         }
         ```

   - ##### **Register User**
      `POST /v1/auth/register`
      - **Description**: Simple register user.
      - **Request Headers**:
         - `Content-Type: application/json`
         - `Authorization: Bearer {{BEARER_TOKEN}}`
      - **Request Body**:
         ```json
         {
            "email": "dummy_email@gmail.com",
            "name": "dummy_name",
            "gender": "F",
            "id": "randomid"
         }
         ```
      - **Response**:
         ```json
         {
            "statusCode": 201,
            "message": "Register User successfully"
         }
         ```
      - **Error Response**:
         ```json
         {
            "message": "Authenticate token failed",
            "statusCode": 401
         }
         ```


#### 2. **User**
   - ##### **Get User List**
      `GET /v1/user`
      - **Description**: Verify token and get user information.
      - **Request Headers**:
         - `Content-Type: application/json`
         - `Authorization: Bearer {{BEARER_TOKEN}}`
      - **Request Query Params**:
         - `limit = 10`
         - `page = 1`
      - **Response**:
         ```json
         {
            "statusCode": 200,
            "data": [
               {
                  "id": "CY7N2XvJ8j9Crx0lZWkP",
                  "name": "Mrs. Brendan Ryan",
                  "email": "Winona.Kertzmann69@yahoo.com",
                  "gender": "M",
                  "createdAt": "2025-02-14T18:11:31.008Z",
                  "updatedAt": "2025-02-14T18:11:31.008Z",
                  "isDeleted": false,
                  "numberOfRents": 64,
                  "totalAverageWeightRatings": 4.69,
                  "recentlyActive": 1740774243786,
                  "rankingScore": 5504.0774243786
               }
            ],
            "meta": {
               "page": 1,
               "limit": 1,
               "totalData": 27
            },
            "message": "Get users successfully"
         }
         ```
      - **Error Response**:
         ```json
         {
            "message": "Authenticate token failed",
            "statusCode": 401
         }
         ```

   - ##### **Get User By ID**
      `GET /v1/user/:id`
      - **Description**: get user by id.
      - **Request Headers**:
         - `Content-Type: application/json`
         - `Authorization: Bearer {{BEARER_TOKEN}}`
      - **Request Params**:
         - `id = asd123123` userId
      - **Response**:
         ```json
        {
            "statusCode": 200,
            "data": {
               "id": "JywR7dmLW13gqE44O6Lb",
               "createdAt": "2025-02-14T18:11:23.166Z",
               "isDeleted": false,
               "name": "Traci Prosacco",
               "email": "Davon82@gmail.com",
               "gender": "F",
               "updatedAt": "2025-02-16T19:23:46.852Z",
               "numberOfRents": 74,
               "recentlyActive": 1740428643786,
               "totalAverageWeightRatings": 3.2,
               "rankingScore": 4114.0428643786
            },
            "message": "Get user by id successfully"
         }
      - **Error Response**:
         ```json
         {
            "message": "Authenticate token failed",
            "statusCode": 401
         }
         ```

   - ##### **Create User**
      `POST /v1/user`
      - **Description**: create user.
      - **Request Headers**:
         - `Content-Type: application/json`
         - `Authorization: Bearer {{BEARER_TOKEN}}`
      - **Request Body**:
         ```json
         {
            "email": "dummy_email@gmail.com",
            "name": "dummy_name",
            "gender": "F"
         }
         ```
      - **Response**:
         ```json
        {
            "statusCode": 201,
            "data": {
               "id": "fb9us9j5Zw9ag5GrORkc",
               "name": "Miss Oscar D'Amore",
               "email": "Polly.Larkin@yahoo.com",
               "gender": "M",
               "createdAt": "2025-02-17T07:56:36.464Z",
               "updatedAt": "2025-02-17T07:56:36.464Z",
               "isDeleted": false
            },
            "message": "User created successfully"
         }
      - **Error Response**:
         ```json
         {
            "message": "Authenticate token failed",
            "statusCode": 401
         }
         ```

   - ##### **Update User**
      `PUT /v1/user/:id`
      - **Description**: update user.
      - **Request Headers**:
         - `Content-Type: application/json`
         - `Authorization: Bearer {{BEARER_TOKEN}}`
      - **Request Params**:
         - `id = asd123123` userId
      - **Request Body**:
         ```json
         {
            "email": "dummy_email@gmail.com",
            "name": "dummy_name",
            "gender": "F"
         }
         ```
      - **Response**:
         ```json
        {
            "statusCode": 200,
            "data": {
               "id": "fb9us9j5Zw9ag5GrORkc",
               "createdAt": "2025-02-17T07:56:36.464Z",
               "isDeleted": false,
               "rankingScore": 0,
               "gender": "F",
               "name": "Annie Greenholt",
               "email": "Owen.Rice@gmail.com",
               "updatedAt": "2025-02-17T07:58:23.775Z"
            },
            "message": "User updated successfully"
         }
      - **Error Response**:
         ```json
         {
            "message": "Authenticate token failed",
            "statusCode": 401
         }
         ```

   - ##### **Delete User By ID**
      `DELETE /v1/user/:id`
      - **Description**: delete user.
      - **Request Headers**:
         - `Content-Type: application/json`
         - `Authorization: Bearer {{BEARER_TOKEN}}`
      - **Request Params**:
         - `id = asd123123` userId
      - **Response**:
         ```json
        {
            "statusCode": 200,
            "message": "User deleted successfully"
         }
      - **Error Response**:
         ```json
         {
            "message": "Authenticate token failed",
            "statusCode": 401
         }
         ```

#### 3. **Technical Test Endpoint**
   - ##### **Get User List**
      `GET /fetch-user-data`
      - **Description**: Get User List
      - **Request Headers**:
         - `Content-Type: application/json`
         - `Authorization: Bearer {{BEARER_TOKEN}}`
      - **Request Query Params**:
         - `limit = 10`
         - `page = 1`
      - **Response**:
         ```json
         {
            "statusCode": 200,
            "data": [
               {
                  "id": "CY7N2XvJ8j9Crx0lZWkP",
                  "name": "Mrs. Brendan Ryan",
                  "email": "Winona.Kertzmann69@yahoo.com",
                  "gender": "M",
                  "createdAt": "2025-02-14T18:11:31.008Z",
                  "updatedAt": "2025-02-14T18:11:31.008Z",
                  "isDeleted": false,
                  "numberOfRents": 64,
                  "totalAverageWeightRatings": 4.69,
                  "recentlyActive": 1740774243786,
                  "rankingScore": 5504.0774243786
               }
            ],
            "meta": {
               "page": 1,
               "limit": 1,
               "totalData": 27
            },
            "message": "Get users successfully"
         }
         ```
      - **Error Response**:
         ```json
         {
            "message": "Authenticate token failed",
            "statusCode": 401
         }
         ```

   - ##### **Update User**
      `PUT /update-user-data/:id`
      - **Description**: update user.
      - **Request Headers**:
         - `Content-Type: application/json`
         - `Authorization: Bearer {{BEARER_TOKEN}}`
      - **Request Params**:
         - `id = asd123123` userId
      - **Request Body**:
         ```json
         {
            "email": "dummy_email@gmail.com",
            "name": "dummy_name",
            "gender": "F"
         }
         ```
      - **Response**:
         ```json
        {
            "statusCode": 200,
            "data": {
               "id": "fb9us9j5Zw9ag5GrORkc",
               "createdAt": "2025-02-17T07:56:36.464Z",
               "isDeleted": false,
               "rankingScore": 0,
               "gender": "F",
               "name": "Annie Greenholt",
               "email": "Owen.Rice@gmail.com",
               "updatedAt": "2025-02-17T07:58:23.775Z"
            },
            "message": "User updated successfully"
         }
      - **Error Response**:
         ```json
         {
            "message": "Authenticate token failed",
            "statusCode": 401
         }
         ```
---

## ⏱️ Multi-Factor Ranking Score Calculation with Cron Job
### Overview
This project implements a **multi-factor ranking system** for users in a Firestore database. Since Firestore does not support true multi-factor sorting, we precompute a **rankingScore** using a scheduled **Cron Job** and store it in Firestore. This allows efficient querying with pagination.

### Approach
   1. **Cron Job Execution:** Periodically runs to recalculate and update the `rankingScore` for all users.
   2. **Precomputed Ranking Score:** Ensures Firestore queries remain fast and efficient.
   3. **Multi-Factor Calculation:** Ranking is based on **ratings, number of rentals, and recent activity.**
   4. **Firestore Query Optimization:** Sorting and pagination use a single indexed field (`rankingScore`).

### Ranking Score Formula
The ranking score is calculated as follows:

```typescript
const rankingScore =
    user.totalAverageWeightRatings * 1000 + // Highest priority
    user.numberOfRents * 10 +               // Second priority
    user.recentlyActive / 1e10;             // Tiebreaker
```

#### **Why This Formula?**
   - **Ratings (`x1000`)** have the highest impact to prioritize high-rated users.
   - **Number of rents (`x10`)** ensures active users are ranked higher.
   - **Recent activity (`/1e10`)** is only used as a tiebreaker to differentiate users with the same scores.

### Firestore Data Structure
Each document in the **USERS** collection contains:
```json
{
  "totalAverageWeightRatings": 4.3,
  "numberOfRents": 30,
  "recentlyActive": 1738938812000,
  "rankingScore": 4773.893
}
```

### Benefits of This Approach
1. ✅ **Fast Firestore Queries:** Sorting and pagination are handled efficiently using a single indexed field.
2. ✅ **Scalable Solution:** The precomputed ranking avoids performance issues with large datasets.
3. ✅ **Automated Updates:** The Cron Job ensures ranking scores remain fresh without client-side overhead.

---
### 🚀 **This solution ensures optimal user ranking while maintaining Firestore performance!**

___
## 🛠️ Technologies Used

- **Express.js**: Framework building the API.
- **Firestore**: Firestore database.
- **Firebase Auth**: Simple Auth management.

----

**Thank you for using Ebuddy Technical Test!** 😊📄
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


## 🛠️ Technologies Used

- **Express.js**: Framework building the API.
- **Firestore**: Firestore database.
- **Firebase Auth**: Simple Auth management.

----

**Thank you for using Ebuddy Technical Test!** 😊📄
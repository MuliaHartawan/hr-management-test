## Project Goals 🎯

This project focuses on building a web application that supports the concept of microservices, where users can perform WFH attendance with login, time recording, and photo upload as proof of work features. In addition, this application also provides a monitoring module for HRD admins, allowing efficient management of employee data through CRUD features and control over submitted attendance data. This project was designed using Node.js with Express.js framework for the backend, as well as React.js for the frontend, with a focus on good database structure, optimal API integration, and responsive user interface components.

Below is the application architecture design :
![image](https://github.com/user-attachments/assets/a1e1c324-a926-4efe-a3de-845d4a04c7d1)

Database design like this
![image](https://github.com/user-attachments/assets/3bf44399-f50a-4418-aea2-3f4194aa9b4a)

## Prerequisites 🔧

Before getting started, make sure you have the following installed on your machine:

- **Docker**: 4.37.2
- **Node.js**: 20.18.1
- **MySQl**: 8.2.4
- **PNPM**: 9.5.0

## Installation Steps 🚀

Follow the steps below to install the project:

1. Clone this repository:

   ```bash
   git clone https://github.com/MuliaHartawan/hr-management-test
   cd hr-management-test
   ```

2. Copy the example environment file:

   ```bash
   make install-app
   ```

3. Create a database to serve existing services

   ```sql
   CREATE DATABASE `hr-management-attendance-database`;
   CREATE DATABASE `hr-management-employee-database`;
   CREATE DATABASE `hr-management-user-database`;
   ```

4. Run migration

   ```sql
   make run-migration
   ```

5. Run the seeder to be able to create the authentication data

   ```sql
   make run-seeder
   ```

6. Build and run with Docker:

   ```bash
   docker compose up --build -d
   ```

7. Access the application at `http://localhost:5173`

## API Documentation 📚

For more information on how to use the API, you can access:

- Postman UI: [Link](https://documenter.getpostman.com/view/12850299/2sAYQWLuGR)

## License

Nest is [MIT licensed](LICENSE).

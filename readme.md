## Project Goals 🎯

This project focuses on building a web application that supports the concept of microservices, where users can perform WFH attendance with login, time recording, and photo upload as proof of work features. In addition, this application also provides a monitoring module for HRD admins, allowing efficient management of employee data through CRUD features and control over submitted attendance data. This project was designed using Node.js with Express.js framework for the backend, as well as React.js for the frontend, with a focus on good database structure, optimal API integration, and responsive user interface components.

Below is the application architecture design :
![image](https://github.com/user-attachments/assets/a1e1c324-a926-4efe-a3de-845d4a04c7d1)

Database design like this
![image](https://github.com/user-attachments/assets/3bf44399-f50a-4418-aea2-3f4194aa9b4a)

## Prerequisites 🔧

Before getting started, make sure you have the following installed on your machine:

- **Docker**: To run the application in containers.
- **Node.js**: The latest version to ensure compatibility.
- **MySQl**: Running on local machine

## Installation Steps 🚀

Follow the steps below to install the project:

1. Clone this repository:

   ```bash
   git clone https://github.com/MuliaHartawan/hr-management-test
   cd hr-management-test
   ```

2. Copy the example environment file:

   ```bash
   make run-app
   ```

3. Buat database untuk melayani service yang ada

```sql
CREATE DATABASE `hr-management-attendance-database`;
CREATE DATABASE `hr-management-employee-database`;
CREATE DATABASE `hr-management-user-database`;
```

4. Build and run with Docker:

   ```bash
   docker compose up --build -d
   ```

5. Access the application at `http://localhost:5173`

## API Documentation 📚

For more information on how to use the API, you can access:

- Postman UI: [Link](https://documenter.getpostman.com/view/12850299/2sAYQWLuGR)

## License

Nest is [MIT licensed](LICENSE).

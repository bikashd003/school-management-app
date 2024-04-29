# School Management App

This is a web-based school management application built using the MERN stack (MongoDB, Express.js, React.js, Node.js) and Tailwind CSS. The app allows you to manage classes, teachers, and students in a school, and provides various analytics features.

## Features

- **Data Management**: CRUD operations for classes, teachers, and students.
- **Forms**: Reusable React components for forms with dynamic rendering of input fields based on the selected model (Class, Teacher, Student).
- **Tables**: Reusable React components for displaying data in tables with pagination, filtering, and sorting capabilities.
- **Analytics**:
  - Class Analytics: Detailed information about a specific class, including the number of male and female students.
  - Expenses and Income Analytics: Overview of expenses spent on teachers' salaries and income generated from paid student fees, with the ability to switch between monthly and yearly views.

## Technologies Used

- **Frontend**: React.js, Redux Toolkit, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB

## Prerequisites

Before running the application, make sure you have the following installed:

- Node.js (v12 or later)
- npm (Node Package Manager)
- MongoDB (or a MongoDB Atlas cluster)

## Getting Started

1. Clone the repository:
   ```bash
   https://github.com/bikashd003/school-management-app.git
   ```

2. Navigate to the project directory:
```bash
cd school-management-app
```

3. Install the dependencies for the backend:
   ```bash
   cd backend
   npm install
``
5. Install the dependencies for the frontend:
 ```bash
cd ../frontend
npm install
 ```

6. Create a `.env` file in the `backend` directory and provide the necessary environment variables (e.g., MongoDB connection string,port).

7. Start the backend server:
   ```bash
   cd ../backend
   npm start
 ``
9. In a separate terminal, start the frontend development server:
 ```bash
cd ../frontend
npm start
```

10. Open your web browser and visit `http://localhost:3000` to access the School Management App.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.


# Taskly

Taskly is a task management app that helps users efficiently manage their daily tasks. It offers user registration, task creation, categorization, and completion statistics. Below is an overview of the project's features, technologies, and setup instructions.

## Features

1. **User Management**

   - User registration and authentication
   - Profile image upload and data editing
   - Login and logout

2. **Task Management**

   - Create, edit, and delete tasks
   - Duplicate and pin tasks
   - Mark tasks as complete/incomplete
   - View tasks by categories (Home, Personal, Work, Education, Health, Fitness)
   - Search for tasks
   - Display completion statistics
   - Real-time reminders and notifications
   - Recurring tasks
   - Task priority levels
   - Task sharing and collaboration

3. **User Experience**
   - Responsive design
   - Dark mode toggle
   - User onboarding with guided tours
   - Accessibility support
   - Toast notifications

## Technologies Used

**Frontend**

- React.js
- JavaScript
- CSS/SCSS
- HTML
- Vite
- React Icons
- React Hot Toast
- Styled Components

**Backend**

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT for authentication
- bcrypt for password hashing

## Installation and Setup

### Prerequisites

- Node.js
- MongoDB

### Backend Setup

1. Clone the repository:

   ```bash
   git clone git@github.com:Naeemi7/Taskly.git

   ```

2. Create a `.env` file in th e server directory and add your MongoDB URI and JWT serect:
   ```
   DB_HOST=
   DB_USER=
   DB_PASS
   DB_NAME
   SECRET_KEY
   ```

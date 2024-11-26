# Role-Based Access Control (RBAC) Project

This is a Role-Based Access Control (RBAC) application developed using Angular. The application features a secure login system, a user-friendly dashboard, and robust functionalities for managing employees. Below is a detailed overview of the project and instructions on how to run it.

# 🚀 Deployment
The project is live at: https://rbac-project-eta.vercel.app

# 📑 Features
1. Authentication
Login Page:
User authentication with validation.
Redirects to the dashboard after successful login.
2. Dashboard
Calendar: View events and dates.
Pie Chart: Displays visual analytics.
Profile Section:
Admin can update their profile.
Employee Count: Total number of employees displayed.
3. Employee Management
Employee Page:
Displays a full list of employees with:
Date and Time at the top.
Sorting options (by ID, by Name).
Search functionality for quick filtering.
Pagination for managing large data sets.
Employee Actions:
View employee details (Active/Inactive status).
Add new employees.
Edit employee details.
Delete employees.
Download employee table in PDF format.
4. Navbar
Contains a Logout Button to securely end the session.

# 📊 Dashboard Functionalities
Interactive Calendar: Seamlessly integrates events and dates.
Pie Chart: Displays data analytics for projects statistics.
Search Functionality: Enables quick filtering of records.
Sorting Options: Sort employees by ID or name.
Download Records: Allows downloading employee records as a PDF.

# 🛠️ Technologies Used
Frontend: Angular
Server : JSON

# 📂 Project Structure

```
src/
├── app/
│   ├── components/         # Components (Dashboard, Employee List, etc.)
│   ├── services/           # Services (API calls, Auth handling)
│   ├── models/             # TypeScript models (if used)
│   └── app.module.ts       # Main app module
├── assets/                 # Static assets (images, CSS, etc.)
├── environments/           # Environment configuration
└── index.html              # Main HTML file
```
# 🚀 How to Run Locally

```
ng s -o 
```



# EmployeePortal

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

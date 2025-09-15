# MiniJournal 📝

MiniJournal is a clean and simple full-stack MERN application that allows users to create and manage their own personal daily journal entries.

---

## Features ✨

- **User Authentication:** Secure user registration and login functionality.
- **Create Entries:** Users can add new journal entries with a specific date and content.
- **View Entries:** Journal entries are displayed in a clean, reverse chronological list.
- **Edit & Delete:** Users have full control to update or remove their past entries.
- **Responsive Design:** A user-friendly interface that works on both desktop and mobile devices.

---

## Technologies Used 🛠️

- **MongoDB:** NoSQL database for storing user and entry data.
- **Express.js:** Backend framework for building the RESTful API.
- **React.js:** Frontend library for building the user interface.
- **Node.js:** JavaScript runtime for the server-side environment.
- **Redux Toolkit:** For efficient state management on the client-side.
- **JWT (JSON Web Tokens):** For secure user authentication.
- **Mongoose:** ODM for interacting with the MongoDB database.
- **Axios:** For making HTTP requests from the client to the server.

---

## Getting Started 🚀

Follow these instructions to get the project up and running on your local machine.

### Prerequisites

- Node.js and npm installed
- MongoDB Atlas account (or a local MongoDB instance)

### Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone <your-repository-url>
    cd <repository-folder>
    ```

2.  **Setup the Backend (Server):**
    ```bash
    cd server
    npm install
    ```
    Create a `.env` file in the `server` directory and add the following variables:
    ```env
    PORT=5000
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret_key
    ```

3.  **Setup the Frontend (Client):**
    ```bash
    cd ../client
    npm install
    ```

### Running the Application

You will need to run the backend and frontend servers in two separate terminals.

1.  **Run the Backend Server:**
    - Navigate to the `server` directory.
    - Run the command:
        ```bash
        npm run dev
        ```
    - The server will start on `http://localhost:5000`.

2.  **Run the Frontend Client:**
    - Navigate to the `client` directory.
    - Run the command:
        ```bash
        npm run dev
        ```
    - The React application will open in your browser.

You can now register a new account and start journaling!
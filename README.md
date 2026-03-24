# 🏥 MedT API - Medical Terminology Encyclopedia

**MedT API** is a robust backend system designed for a medical encyclopedia. It provides students and healthcare professionals with a seamless way to access medical terms in both English and Arabic, featuring 3D model integration and specialty-based categorization.

## 🚀 Tech Stack
* **Node.js**: JavaScript runtime environment.
* **Express.js**: Fast and minimalist web framework for the API.
* **MongoDB & Mongoose**: NoSQL database and object modeling for data persistence.
* **RESTful API**: Architectural style for scalable and maintainable endpoints.

## 🏗️ Data Architecture
The project utilizes a One-to-One relationship between two collections to optimize performance:
1.  **Term Model**: Stores core data (English/Arabic terms, Specialization, and Pronunciation).
2.  **Details Model**: Stores heavy data (Full definitions, AI-generated explanations, Examples, and 3D Model URLs).

## 🛠️ API Endpoints

### Medical Terms Management
| Route | Method | Description |
| :--- | :--- | :--- |
| `/MedTApi/api/v1/addTerm` | `POST` | Create a new term and its associated details. |
| `/MedTApi/api/v1/all` | `GET` | Retrieve all medical terms in the database. |
| `/MedTApi/api/v1/search/:searchQuery` | `GET` | Search by English Name, Arabic Name, or Specialization. |
| `/MedTApi/api/v1/GetTerm/:_id` | `GET` | Fetch complete data for a specific term using its ID. |
| `/MedTApi/api/v1/updateTerm/:id` | `PUT` | Update term data and detailed information. |
| `/MedTApi/api/v1/DeleteTerm` | `DELETE` | Remove a term and its details from the system. |

## 🌟 Key Features
* **Multi-Field Search**: Advanced search logic using MongoDB `$or` and `RegExp` to filter by multiple fields simultaneously.
* **Virtual Population**: Efficiently links collections without redundant data storage.
* **3D Visualization Support**: Built-in support for Element 3D URLs to provide an interactive learning experience.
* **Global Error Handling**: A centralized middleware to catch and format API errors consistently.

## 💻 Local Setup
1.  Clone the repository: `git clone MEDTAPi`
2.  Install dependencies: `npm install`
3.  Configure Environment Variables: Create a `.env` file and add your `MONGO_URI`.
4.  Run the server: `npm start`
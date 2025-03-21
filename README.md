# Recipe App

Welcome to the **Recipe App**, a simple and interactive application that allows users to explore, search, and save their favorite recipes. This app provides an intuitive interface to view detailed recipe instructions, ingredients, and cooking steps with ease.

## 🚀 Features

✅ **Home Page** – Search for recipes and browse a list of suggested recipes.\
✅ **Recipe Details Page** – View full recipe details, including ingredients and instructions.\
✅ **Favorites Page** – Save and manage favorite recipes for easy access later.\
✅ **Fully Responsive** – Works seamlessly across mobile, tablet, and desktop screens.

## 🛠️ Technologies Used

### **Frontend**

- **React.js** – Component-based UI framework used for building the app.
- **React Router** – Enables seamless client-side routing.
- **React Hooks**
  - `useState` – Manages application state (search term, recipes, favorites, etc.).
  - `useEffect` – Fetches data and handles side effects.
  - `useRef` – Accesses the input field directly for clearing input after search.
- **Local Storage** – Saves favorite recipes persistently across user sessions.
- **Lucide Icons** – Provides scalable and stylish icons.
- **Tailwind CSS** – Utility-first CSS framework for styling.

### **API**

- **Forkify API** – The app fetches recipe data from [Forkify API](https://forkify-api.herokuapp.com).

## 📌 Key Features Implemented

🔍 **Recipe Search** – Users can search for recipes using keywords.\
📜 **Recipe Listing** – Display recipes with essential details like title, publisher, and image.\
📖 **Recipe Details Page** – Show complete recipe details, including ingredients and instructions.\
❤️ **Favorites Management** – Add/remove recipes from favorites, stored using local storage.\
⚠️ **Error Handling** – Provides feedback when API errors occur or no results are found.

## 🔧 Setup & Installation

Clone the repository and install dependencies:

```bash
# Clone the repository
git clone https://github.com/Abhishek-soni6904/recipe-app.git

# Navigate to the project folder
cd recipe-app

# Install dependencies
npm install  # or yarn install

# Start the development server
npm start  # or yarn start

# Open the app in the browser
http://localhost:3000
```

## 🏗️ App Structure

### **Main Files**

- **`index.js`** – Renders the root component of the application.
- **`App.js`** – The core application component that includes search functionality and routes.

### **Components**

📌 **Navbar.jsx** – Contains navigation links and the search bar.\
🏠 **Home.jsx** – Displays search results and handles loading/errors.\
🍽️ **RecipeDetails.jsx** – Shows detailed recipe information and allows adding to favorites.\
💖 **Favorites.jsx** – Lists all saved favorite recipes from local storage.\
📝 **RecipeItem.jsx** – Represents individual recipe cards used in the home and favorites sections.

## ⚡ How It Works

### **1️⃣ Home Page**

- Users can search for recipes using a search bar.
- Displays a list of matching recipes fetched from the API.
- Handles loading and error messages efficiently.

### **2️⃣ Favorites Page**

- Displays saved favorite recipes.
- If no recipes are saved, a friendly message is displayed.

### **3️⃣ Recipe Details Page**

- Clicking on a recipe shows complete details (ingredients, and link to check the recipe from original source etc.).
- Users can add or remove the recipe from favorites.

## 🔗 Connect on LinkedIn

Check out my LinkedIn post about this project: [LinkedIn Post](#)

import "./App.css";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
function App() {
  const [searchValue, setSearchValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [recipes, setRecipes] = useState([]);
  const fetchRecipes = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchValue}`
      );
      const data = await response.json();
      if (!response.ok) throw new Error("Failed to Fetch");
      if (data.data.recipes && data.data.recipes.length)
        setRecipes(data.data.recipes);
      else throw new Error("No recipes found");
      setError("");
    } catch (error) {
      setError(error.message);
      setRecipes([]);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (!searchValue.trim()) return;
    fetchRecipes();
  }, [searchValue]);
  return (
    <>
      <Navbar searchValue={searchValue} setSearchValue={setSearchValue} />
      <Outlet context={{ recipes, loading, error }} />
    </>
  );
}

export default App;

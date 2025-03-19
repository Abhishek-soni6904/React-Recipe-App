import React, { useState, useEffect } from 'react'
import RecipeItem from './RecipeItem'
export default function Favorites() {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    let favorites = []
    try {
      favorites = JSON.parse(localStorage.getItem("favorites") || [])
      setRecipes(favorites)
    } catch (error) {
      console.error(error)
    }
  }, [])
  return (
    <main className="container mx-auto px-4 py-8">
      {recipes.length > 0 ? (
        <RecipeItem recipes={recipes} />
      ) : (
        <div className="flex justify-center items-center h-64">
          <p className="text-xl text-gray-600">You have no recipes in your favorites yet.</p>
        </div>
      )}
    </main>
  )
}

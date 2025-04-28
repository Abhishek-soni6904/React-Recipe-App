import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Clock, Users, ChevronRight, Heart } from 'lucide-react'

export default function RecipeDetails() {
  const { id } = useParams()
  const [recipeDetails, setRecipeDetails] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [isFavorite, setIsFavorite] = useState(false)

  const fetchRecipeDetails = async () => {
    setLoading(true)
    try {
      const response = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`)
      if (!response.ok) throw new Error("Failed to fetch details")
      const data = await response.json()
      if (data.data.recipe)
        setRecipeDetails(data.data.recipe)
      else throw new Error("No recipe found")
      setError('')
    } catch (error) {
      setError(error.message)
      setRecipeDetails(null)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (!id) return
    fetchRecipeDetails()
    let favorites = []
    try {
      favorites = JSON.parse(localStorage.getItem("favorites") || [])
    } catch (error) {
      console.error(error)
    }
    setIsFavorite(favorites.some(fav => fav.id === id))
  }, [id])

  const toggleFavorite = () => {
    if (!recipeDetails) return
    let favorites = []
    try {
      favorites = JSON.parse(localStorage.getItem("favorites") || [])
    } catch (error) {
      console.error(error)
    }
    const recipeToAdd = {
      id: recipeDetails.id,
      title: recipeDetails.title,
      image_url: recipeDetails.image_url,
      publisher: recipeDetails.publisher,
    }
    const updatedFavorites = isFavorite
      ? favorites.filter(fav => fav.id !== id)
      : [...favorites, recipeToAdd]

    try {
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites))
    } catch (error) {
      console.error('Error saving favorites to localStorage:', error)
    }

    setIsFavorite(!isFavorite)
  }


  return (
    <main className="max-w-6xl p-4 mx-auto md:p-6">
      {loading && (
        <div className="flex items-center justify-center min-h-64">
          <div className="w-16 h-16 border-t-4 border-teal-500 rounded-full animate-spin"></div>
        </div>
      )}

      {error && (
        <div className="p-4 my-4 text-red-700 bg-red-100 border-l-4 border-red-500">
          <p>{error}</p>
        </div>
      )}

      {!loading && !error && recipeDetails && (
        <div className="overflow-hidden bg-white rounded-lg shadow-lg">
          {/* Hero Section with Image */}
          <div className="relative h-64 bg-gray-200 md:h-80 lg:h-96">
            <img
              src={recipeDetails.image_url}
              alt={recipeDetails.title}
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 to-transparent">
              <div className="w-full p-4 text-white md:p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <h1 className="text-2xl font-bold md:text-3xl lg:text-4xl">{recipeDetails.title}</h1>
                    <p className="mt-2 text-sm md:text-base opacity-90">By {recipeDetails.publisher}</p>
                  </div>
                  <button
                    onClick={toggleFavorite}
                    className={`p-2 rounded-full transition-all ${isFavorite
                      ? 'bg-red-500 text-white'
                      : 'bg-white/30 text-white hover:bg-white/50'
                      }`}
                    aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
                  >
                    <Heart
                      size={24}
                      className={isFavorite ? 'fill-current' : ''}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Recipe Info Bar */}
          <div className="flex flex-wrap justify-between gap-4 p-4 border-b md:p-6">
            <div className="flex items-center gap-2 text-gray-700">
              <Clock size={20} className="text-teal-600" />
              <span>{recipeDetails.cooking_time} minutes</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <Users size={20} className="text-teal-600" />
              <span>{recipeDetails.servings} servings</span>
            </div>
            <a
              href={recipeDetails.source_url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-teal-600 transition-colors hover:text-teal-800"
            >
              Original Recipe
              <ChevronRight size={16} />
            </a>
          </div>

          {/* Two Column Layout for Ingredients and Instructions */}
          <div className="grid gap-6 p-4 md:grid-cols-2 md:p-6">
            {/* Ingredients Column */}
            <div>
              <h2 className="pb-2 mb-4 text-xl font-bold border-b border-gray-200">Ingredients</h2>
              <ul className="space-y-2">
                {recipeDetails.ingredients.map((ingredient, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className=" bg-teal-100 text-teal-800 rounded-full w-6 h-6 flex-shrink-0 flex items-center justify-center mt-0.5">
                      {index + 1}
                    </span>
                    <span>
                      {ingredient.quantity && (
                        <span className="font-medium">{ingredient.quantity} </span>
                      )}
                      {ingredient.unit && (
                        <span>{ingredient.unit} </span>
                      )}
                      {ingredient.description}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Instructions Column */}
            <div>
              <h2 className="pb-2 mb-4 text-xl font-bold border-b border-gray-200">How to Cook</h2>
              <div className="prose prose-teal max-w-none">
                <p className="mb-4">
                  This recipe for {recipeDetails.title} is provided by {recipeDetails.publisher}.
                  For full cooking instructions, please visit the original recipe page.
                </p>
                <div className="flex justify-center mt-6">
                  <a
                    href={recipeDetails.source_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 text-white transition-colors bg-teal-600 rounded-lg hover:bg-teal-700"
                  >
                    View Full Instructions
                    <ChevronRight size={16} className="ml-1" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Recipe Info Footer */}
          <div className="p-4 text-sm text-gray-600 bg-gray-50 md:p-6">
            <p className="text-center">
              Recipe ID: {recipeDetails.id}
            </p>
          </div>
        </div>
      )}
    </main>
  )
}
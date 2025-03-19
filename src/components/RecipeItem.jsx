import React from 'react'
import { Link } from 'react-router-dom'
export default function RecipeItem({ recipes }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recipes.map((recipe) => (
                <Link
                    to={`/recipeDetails/${recipe.id}`}
                    key={recipe.id}
                    className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                    <div className="h-48 overflow-hidden">
                        <img
                            src={recipe.image_url}
                            alt={recipe.title}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="p-4">
                        <p className="text-sm text-gray-500">Recipe by {recipe.publisher}</p>
                        <h3 className="text-lg font-semibold mt-1 truncate">{recipe.title}</h3>
                    </div>
                </Link>
            ))}
        </div>
    )
}

import React from 'react';
import { useOutletContext } from 'react-router-dom';
import RecipeItem from './RecipeItem';
export default function Home() {
  const { recipes, loading, error } = useOutletContext();
  return (
    <main className="container mx-auto px-4 py-8">
      {loading && (
        <div className="flex justify-center items-center h-64">
          <p className="text-xl font-semibold">Loading recipes...</p>
        </div>
      )}

      {error && (
        <div className="flex justify-center items-center h-64">
          <p className="text-xl text-red-500">{error}</p>
        </div>
      )}

      {!loading && !error && recipes.length === 0 && (
        <div className="flex justify-center items-center h-64">
          <p className="text-xl text-gray-500">Search for recipes to get started</p>
        </div>
      )}

      {!loading && !error && recipes.length > 0 && <RecipeItem recipes={recipes} />}
    </main>
  );
}
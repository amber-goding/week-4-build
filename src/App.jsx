import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

const RANDOM_MEAL_URL = 'https://www.themealdb.com/api/json/v1/1/random.php'
const FRIENDLY_ERROR_MESSAGE =
  "We couldn't reveal a recipe. Please try again."

function getText(value) {
  return typeof value === 'string' ? value.trim() : ''
}

async function fetchRandomMeal() {
  let response

  try {
    response = await fetch(RANDOM_MEAL_URL)
  } catch {
    throw new Error('Unable to connect to TheMealDB.')
  }

  if (!response.ok) {
    throw new Error(`TheMealDB request failed with status ${response.status}.`)
  }

  let data

  try {
    data = await response.json()
  } catch {
    throw new Error('TheMealDB returned an invalid response.')
  }

  if (!Array.isArray(data?.meals)) {
    throw new Error('TheMealDB response did not include a meals array.')
  }

  const meal = data.meals.find(
    (candidate) =>
      candidate &&
      typeof candidate === 'object' &&
      getText(candidate.strMeal),
  )

  if (!meal) {
    throw new Error('TheMealDB did not return a meal.')
  }

  return meal
}

function getIngredients(meal) {
  return Array.from({ length: 20 }, (_, index) => {
    const number = index + 1
    const ingredient = getText(meal[`strIngredient${number}`])

    if (!ingredient) return null

    return {
      ingredient,
      measure: getText(meal[`strMeasure${number}`]),
    }
  }).filter(Boolean)
}

function App() {
  const [meal, setMeal] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const hasRequestedMeal = useRef(false)

  const loadMeal = useCallback(async () => {
    setIsLoading(true)
    setError('')

    try {
      const nextMeal = await fetchRandomMeal()
      setMeal(nextMeal)
    } catch (requestError) {
      console.error('Unable to load a random meal:', requestError)
      setError(FRIENDLY_ERROR_MESSAGE)
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    if (hasRequestedMeal.current) return

    hasRequestedMeal.current = true
    loadMeal()
  }, [loadMeal])

  const ingredients = meal ? getIngredients(meal) : []
  const mealName = meal ? getText(meal.strMeal) : ''
  const mealImage = meal ? getText(meal.strMealThumb) : ''
  const instructions = meal ? getText(meal.strInstructions) : ''

  return (
    <main aria-busy={isLoading}>
      <h1>Madam Morticia&apos;s Candy Emporium</h1>

      {error && <p role="alert">{error}</p>}

      {!meal && isLoading && <p role="status">Loading recipe...</p>}

      {meal && (
        <article>
          <h2>{mealName}</h2>

          {mealImage && <img src={mealImage} alt={mealName} />}

          <section>
            <h3>Ingredients</h3>
            {ingredients.length > 0 ? (
              <ul>
                {ingredients.map(({ ingredient, measure }) => (
                  <li key={`${ingredient}-${measure}`}>
                    {measure && `${measure} `}
                    {ingredient}
                  </li>
                ))}
              </ul>
            ) : (
              <p>No ingredients were provided.</p>
            )}
          </section>

          <section>
            <h3>Instructions</h3>
            <p>{instructions || 'No instructions were provided.'}</p>
          </section>
        </article>
      )}

      <button type="button" onClick={loadMeal} disabled={isLoading}>
        {isLoading
          ? 'Revealing...'
          : error && !meal
            ? 'Try Again'
            : 'Reveal Another Recipe'}
      </button>
    </main>
  )
}

export default App

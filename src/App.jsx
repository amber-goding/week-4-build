import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

const DESSERT_LIST_URL =
  'https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert'
const MEAL_LOOKUP_URL = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i='
const FRIENDLY_ERROR_MESSAGE =
  "We couldn't reveal a recipe. Please try again."
const SPOOKY_PREFIXES = [
  'Bewitched',
  'Moonlit',
  'Phantom-Kissed',
  'Spellbound',
  'Midnight',
  'Haunted',
]

function getText(value) {
  return typeof value === 'string' ? value.trim() : ''
}

function createSpookyAlias(originalName) {
  const nameScore = Array.from(originalName).reduce(
    (total, character) => total + character.charCodeAt(0),
    0,
  )
  const prefix = SPOOKY_PREFIXES[nameScore % SPOOKY_PREFIXES.length]

  return `${prefix} ${originalName}`
}

async function fetchJson(url) {
  let response

  try {
    response = await fetch(url)
  } catch {
    throw new Error('Unable to connect to TheMealDB.')
  }

  if (!response.ok) {
    throw new Error(`TheMealDB request failed with status ${response.status}.`)
  }

  try {
    return await response.json()
  } catch {
    throw new Error('TheMealDB returned an invalid response.')
  }
}

async function fetchRandomDessert(currentMealId = '') {
  const dessertData = await fetchJson(DESSERT_LIST_URL)

  if (!Array.isArray(dessertData?.meals)) {
    throw new Error('TheMealDB did not return a dessert list.')
  }

  const desserts = dessertData.meals.filter(
    (candidate) =>
      candidate &&
      typeof candidate === 'object' &&
      getText(candidate.idMeal),
  )

  if (desserts.length === 0) {
    throw new Error('TheMealDB did not return any desserts.')
  }

  const alternatives = desserts.filter(
    (dessert) => getText(dessert.idMeal) !== currentMealId,
  )
  const choices = alternatives.length > 0 ? alternatives : desserts
  const selectedDessert = choices[Math.floor(Math.random() * choices.length)]
  const selectedId = getText(selectedDessert.idMeal)
  const mealData = await fetchJson(
    `${MEAL_LOOKUP_URL}${encodeURIComponent(selectedId)}`,
  )

  if (!Array.isArray(mealData?.meals)) {
    throw new Error('TheMealDB did not return recipe details.')
  }

  const dessert = mealData.meals.find(
    (candidate) =>
      candidate &&
      typeof candidate === 'object' &&
      getText(candidate.idMeal) &&
      getText(candidate.strMeal),
  )

  if (!dessert) {
    throw new Error('TheMealDB did not return a complete dessert recipe.')
  }

  return dessert
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
  const [recipeAlias, setRecipeAlias] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const hasRequestedMeal = useRef(false)

  const loadMeal = useCallback(async (currentMealId = '') => {
    setIsLoading(true)
    setError('')

    try {
      const nextMeal = await fetchRandomDessert(currentMealId)
      setMeal(nextMeal)
      setRecipeAlias(createSpookyAlias(getText(nextMeal.strMeal)))
    } catch (requestError) {
      console.error('Unable to load a random dessert:', requestError)
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
  const currentMealId = meal ? getText(meal.idMeal) : ''

  return (
    <main className="emporium" aria-busy={isLoading}>
      <div className="moon-glow" aria-hidden="true" />

      <header className="shop-header">
        <p className="eyebrow">Confections, curiosities &amp; culinary spells</p>
        <h1>
          <span>Madam Morticia&apos;s</span>
          Candy Emporium
        </h1>
        <p className="tagline">
          Knock thrice, step softly, and discover what the cauldron has chosen.
        </p>
      </header>

      {error && (
        <div className="message message--error" role="alert">
          <span aria-hidden="true">✦</span>
          <p>{error}</p>
        </div>
      )}

      {!meal && isLoading && (
        <div className="loading-card" role="status">
          <span className="crystal-ball" aria-hidden="true" />
          <p>Consulting the enchanted cookbook...</p>
        </div>
      )}

      {meal && (
        <article className="recipe-card">
          <header className="recipe-heading">
            <p className="discovery-label">Tonight&apos;s enchanted discovery</p>
            <h2>{recipeAlias || mealName}</h2>
            <p className="original-name">
              Originally known as <span>{mealName}</span>
            </p>
            <span className="flourish" aria-hidden="true">
              ◆ ✦ ◆
            </span>
          </header>

          <div className="recipe-layout">
            <div className="recipe-sidebar">
              {mealImage ? (
                <figure className="image-frame">
                  <img src={mealImage} alt={mealName} />
                </figure>
              ) : (
                <div className="image-placeholder">
                  <span aria-hidden="true">☾</span>
                  <p>This recipe keeps no portrait.</p>
                </div>
              )}

              <section className="ingredients-panel">
                <h3>
                  <span aria-hidden="true">✧</span> Ingredients
                </h3>
                {ingredients.length > 0 ? (
                  <ul>
                    {ingredients.map(({ ingredient, measure }, index) => (
                      <li key={`${ingredient}-${index}`}>
                        <span className="measure">{measure || 'To taste'}</span>
                        <span>{ingredient}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="empty-note">No ingredients were provided.</p>
                )}
              </section>
            </div>

            <section className="instructions-panel">
              <p className="section-kicker">From the spellbook</p>
              <h3>Method of Enchantment</h3>
              <p>{instructions || 'No instructions were provided.'}</p>
            </section>
          </div>
        </article>
      )}

      <div className="reveal-area">
        {meal && isLoading && (
          <p className="refresh-status" role="status">
            The pages are turning...
          </p>
        )}
        <button
          type="button"
          onClick={() => loadMeal(currentMealId)}
          disabled={isLoading}
        >
          <span aria-hidden="true">✦</span>
          {isLoading
            ? 'Revealing...'
            : error && !meal
              ? 'Try Again'
              : 'Reveal Another Recipe'}
          <span aria-hidden="true">✦</span>
        </button>
      </div>

      <footer className="shop-footer" aria-hidden="true">
        <span>Est.</span>
        <span className="footer-mark">☾</span>
        <span>1893</span>
      </footer>
    </main>
  )
}

export default App

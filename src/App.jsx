import { useEffect, useRef } from 'react'
import './App.css'

const RANDOM_MEAL_URL = 'https://www.themealdb.com/api/json/v1/1/random.php'

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
    (candidate) => candidate && typeof candidate === 'object',
  )

  if (!meal) {
    throw new Error('TheMealDB did not return a meal.')
  }

  return meal
}

function App() {
  const hasRequestedMeal = useRef(false)

  useEffect(() => {
    if (hasRequestedMeal.current) return

    hasRequestedMeal.current = true

    async function loadMeal() {
      try {
        const meal = await fetchRandomMeal()
        console.log('Random meal:', meal)
      } catch (error) {
        console.error('Unable to load a random meal:', error)
      }
    }

    loadMeal()
  }, [])

  return <main />
}

export default App

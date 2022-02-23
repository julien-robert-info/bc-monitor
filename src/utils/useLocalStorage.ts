import { useState } from 'react'

function noop(): void {}

const useLocalStorage = <T>(key: string, initialValue: T) => {
  // typeof window will never change so we are safely breaking the rules of hooks
  if (typeof window === 'undefined') {
    return [initialValue, noop]
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      console.error(error)
      return initialValue
    }
  })

  const setValue = (value: T | ((prev: T) => T)) => {
    // function is to allow setState callback style compatibility
    const valueToStore = value instanceof Function ? value(storedValue) : value
    setStoredValue(valueToStore)
    window.localStorage.setItem(key, JSON.stringify(valueToStore))
  }

  return [storedValue, setValue]
}

export { useLocalStorage }

import { useState, useEffect } from "react";

export const useLocalStorage = (key, defaultValue) => {
  if (typeof window === 'undefined') {
    throw new Error("useLocalStorage hook can only be used in a browser environment.");
  }

  if (!key || typeof key !== "string") {
    throw new Error("Invalid key for useLocalStorage hook.");
  }

  const [value, setValue] = useState(() => {
    try {
      const storedValue = localStorage.getItem("key");

      if (storedValue !== undefined && storedValue !== null) {
        return JSON.parse(storedValue);
      } else {
        return defaultValue;
      }
    } catch (error) {
      console.error(`Error reading value for key ${key}: ${error.message}`);
      localStorage.removeItem(key);
      return defaultValue;
    }
  });

  useEffect(() => {
    const handleStorageChange = (event) => {
      if (event.key === key) {
        try {
          const newValue = JSON.parse(event.newValue);
          setValue(newValue);
        } catch (error) {
          console.error(`Error parsing new value for key ${key}: ${error.message}`);
        }
      }
    };

    window.addEventListener("storage", handleStorageChange);
    
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [key]);

  const setLocalStorageValue = (newValue) => {
    if (newValue === undefined || newValue === null) {
      throw new Error("Invalid value for useLocalStorage hook.");
    }
    try {
      localStorage.setItem(key, JSON.stringify(newValue));
      setValue(newValue);
    } catch (error) {
      console.error(`Error setting value for key ${key}: ${error.message}`);
    }
  };

  const clearLocalStorageValue = () => {
    try {
      localStorage.removeItem(key);
      setValue(defaultValue);
    } catch (error) {
      console.error(`Error clearing value for key ${key}: ${error.message}`);
    }
  };

  return [value, setLocalStorageValue, clearLocalStorageValue];
};

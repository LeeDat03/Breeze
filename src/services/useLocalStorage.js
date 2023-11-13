import { useEffect, useState } from "react";

export function useLocalStorage(initialState, key) {
  const [savedWeathers, setSavedWeathers] = useState(function () {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : initialState;
  });

  useEffect(
    function () {
      localStorage.setItem(key, JSON.stringify(savedWeathers));
    },
    [savedWeathers, key]
  );

  return [savedWeathers, setSavedWeathers];
}

import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "./store";
import { useEffect, useState } from "react";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

export const useDebounce = ({
  searchTerm,
  delay,
}: {
  searchTerm: string;
  delay: number;
}) => {
  const [debounceValue, setDebounceValue] = useState<string>(searchTerm);

  useEffect(() => {
    const hanlder = setTimeout(() => {
      setDebounceValue(searchTerm);
    }, delay);

    return () => {
      clearTimeout(hanlder);
    };
  }, [searchTerm, delay]);

  return debounceValue;
};

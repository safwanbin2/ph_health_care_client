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
  const [debounceSearchTerm, setDebounceSearchTerm] =
    useState<string>(searchTerm);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceSearchTerm(searchTerm);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm, delay]);

  return debounceSearchTerm;
};

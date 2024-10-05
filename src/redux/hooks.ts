import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./sotre";

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const UseAppSelector: TypedUseSelectorHook<RootState> = useSelector;
import {AppDispatch, RootState} from "../store/store.ts";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";

export const useTypeDispatch = () => useDispatch<AppDispatch>()
export const useTypeSelector: TypedUseSelectorHook<RootState> = useSelector
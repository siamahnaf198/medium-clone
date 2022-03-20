import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "Redux/Reducers/Reducers";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

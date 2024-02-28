import {combineReducers} from "@reduxjs/toolkit";
import {grid} from "./features/gridSlice.ts";

export const reducer = combineReducers({
    grid
})
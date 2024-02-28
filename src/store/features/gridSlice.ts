import {createSlice} from "@reduxjs/toolkit";

type initialStateType = {
    cells: boolean [] [] | null
}

const initialState: initialStateType = {
    cells: Array.from({length: 30}, () => Array(30).fill(false))
}

const gridSlice = createSlice({
    name: 'slice',
    initialState,
    reducers:  {
        updateAllCells: (state, action) => {
            const newCells: any = action.payload
            state.cells = newCells
        },

        changeCellState: (state, action) => {
            const {rowIndex, cellIndex} = action.payload
            if(state.cells) {
                state.cells[rowIndex][cellIndex] = !state.cells[rowIndex][cellIndex]
            }
        }

    }
})

export const grid = gridSlice.reducer
export const gridActions = gridSlice.actions
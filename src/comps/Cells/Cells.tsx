import {FC, useCallback} from 'react';
import {Cell} from "./Cell.tsx";
import {gridActions} from "../../store/features/gridSlice.ts";
import {useTypeDispatch} from "../../hooks/redux.ts";

type CellsProps = {
    cells: boolean [][]
}


export const Cells:FC<CellsProps> = ({cells}) => {

    const dispatch = useTypeDispatch()
    const onCellClickHandler = (rowIndex: number, cellIndex: number): void => {
        dispatch(gridActions.changeCellState({rowIndex,cellIndex}))
    }

    return (
        <>
            {cells.map((row: boolean [], rowIndex: number) => {
                return row.map((cell: boolean, cellIndex: number) => {
                    const key: string = `${rowIndex}+${cellIndex}`

                    return (
                        <Cell onClick={useCallback(() => onCellClickHandler(rowIndex, cellIndex), [])} key={key} state={cell} />
                    )
                    })
                }).flat()
            }
        </>
)}

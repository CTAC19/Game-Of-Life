import {FC, useRef, useState, MutableRefObject, useEffect, ChangeEventHandler} from 'react';
import {Button} from "../UI/buttons/Button/Button.tsx";
import {useTypeDispatch, useTypeSelector} from "../../hooks/redux.ts";
import {Life} from "../../utils/Life.ts";
import {gridActions} from "../../store/features/gridSlice.ts";
import "./simulationContols.scss"
import {StatusSimulationButton} from "./StatusSimulationButton.tsx";
import {RangeInput} from "../UI/inputs/RangeInput.tsx";


type SimulationControlsProps = {

}


export const SimulationControls:FC<SimulationControlsProps> = () => {

    const {cells} = useTypeSelector(state => state.grid)
    const dispatch = useTypeDispatch()

    const [isSimulationRunning, setIsSimulationRunning] = useState(false)
    const [intervalDuration, setIntervalDuration] = useState(150)
    const intervalId: MutableRefObject<number> = useRef(0)
    const cellsRef: MutableRefObject<boolean [] [] | null> = useRef(cells)

    useEffect(()=> {
        cellsRef.current = cells
    },[cells])

    const statusSimulationButtonHandler = () => {
        if(cells && cellsRef.current) {
            setIsSimulationRunning(state => !state)

            if(!isSimulationRunning) {
                intervalId.current = setInterval(()=>{

                    const newLife = new Life(cellsRef.current!)
                    newLife.updateAllCells()

                    dispatch(gridActions.updateAllCells(newLife.getAllCells()))
                }, intervalDuration)
            } else {
                clearInterval(intervalId.current)
            }
        }
    }

    const makeCellsRandomButtonHandler = () => {
        if(cells) {
            const newLife = new Life(cells)
            const newCells = newLife.getRandomCells(0.6, 0.1)
            dispatch(gridActions.updateAllCells(newCells))
        }
    }

    const clearSimulationButtonHandler = () => {
        dispatch(gridActions.updateAllCells(Array.from({length: 30}, () => Array(30).fill(false))))
    }

    const changeVelocityOnChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        if(cells && cellsRef.current) {
            const value = Number(event.target.value)

            if(isSimulationRunning) {
                setIntervalDuration(value)

                setIsSimulationRunning(true)
                clearInterval(intervalId.current)

                intervalId.current = setInterval(()=>{

                    const newLife = new Life(cellsRef.current!)
                    newLife.updateAllCells()

                    dispatch(gridActions.updateAllCells(newLife.getAllCells()))
                }, value)
            } else {
                setIntervalDuration(value)
            }
        }
    }

    return (
        <div className="simulationControls">
            <Button onClick={statusSimulationButtonHandler} >
                <StatusSimulationButton isSimulationRunning={isSimulationRunning}/>
            </Button>
            <Button onClick={makeCellsRandomButtonHandler} >Random</Button>
            <Button onClick={clearSimulationButtonHandler} >Clear</Button>
            <RangeInput type="range" min="50" max="1000" step="1" value={intervalDuration} onChange={changeVelocityOnChange} />
        </div>
)}

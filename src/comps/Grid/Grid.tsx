import {FC} from 'react';
import './grid.scss'
import {useTypeSelector} from "../../hooks/redux.ts";

import {Cells} from "../Cells/Cells.tsx";

type GridProps = {

}


export const Grid:FC<GridProps> = () => {

    const {cells} = useTypeSelector(state => state.grid)

    if(!cells) {
        return (
            <div className="grid noCells">
                <h2>There is no cells</h2>
            </div>
        )
    }

    return (
        <div className="grid">
            <Cells cells={cells} />
        </div>
)}

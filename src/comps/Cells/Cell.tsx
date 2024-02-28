import {FC, memo} from 'react';
import './cell.scss';

type CellProps = {
    state: boolean
    onClick: () => void
}

export const Cell:FC<CellProps> = memo(({state, onClick}) => {
    console.log('cell render')
    let isAlive: string

    if(state) {
       isAlive = 'alive'
    } else {
        isAlive = 'dead'
    }

    return (<div onClick={onClick} className={`cell ${isAlive}`}> </div>)
})

import {FC} from 'react';
import {Grid} from "../Grid/Grid.tsx";
import {SimulationControls} from "../SimulationControls/SimulationControls.tsx";
import "./mainPage.scss"

type MainPageProps = {

}


export const MainPage:FC<MainPageProps> = () => {

    return (
        <div className="mainPage">
            <Grid />
            <SimulationControls />
        </div>
)}

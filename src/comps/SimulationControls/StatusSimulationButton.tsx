import {FC} from 'react';
import playIcon from '../../assets/icons/play-svg.svg';
import pauseIcon from '../../assets/icons/pause-svg.svg';

type StatusSimulationButtonProps = {
    isSimulationRunning: boolean
}


export const StatusSimulationButton:FC<StatusSimulationButtonProps> = ({isSimulationRunning}) => {

    if(!isSimulationRunning) {
        return (
            <>
                Play <img src={playIcon} className="icon" />
            </>
        )
    } else {
        return (
            <>
                Pause <img src={pauseIcon} className="icon" />
            </>
        )

    }
}


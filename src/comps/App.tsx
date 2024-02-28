import {FC} from 'react';

import '../styles/base/index.scss'
import {MainPage} from "./pages/MainPage.tsx";
import {Provider} from "react-redux";
import {store} from "../store/store.ts";

type AppProps = {

}

export const App:FC<AppProps> = () => {

    return (
        <Provider store={store}>
            <MainPage />
        </Provider>
)}


import {FC, InputHTMLAttributes} from 'react';
import './input.scss'

type InputProps = InputHTMLAttributes<HTMLInputElement>


export const Input:FC<InputProps> = ({...restProps}) => {

    return (
        <input {...restProps} />
)}


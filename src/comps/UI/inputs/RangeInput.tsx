import {FC, InputHTMLAttributes} from 'react';
import {Input} from "./Input.tsx";

type RangeInputProps = InputHTMLAttributes<HTMLInputElement>


export const RangeInput:FC<RangeInputProps> = ({...restProps}) => {

    return (
        <Input className="input-range" {...restProps} />
)}

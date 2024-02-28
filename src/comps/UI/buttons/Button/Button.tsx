import {ButtonHTMLAttributes, FC} from 'react';
import './button.scss'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>


export const Button:FC<ButtonProps> = ({children, ...restProps}) => {

    return (
        <button className="button" {...restProps}>
            {children}
        </button>
)}

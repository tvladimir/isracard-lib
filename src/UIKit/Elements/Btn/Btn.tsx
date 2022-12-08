import React from 'react';
import './Btn.css';

export interface IBtnProps {
    onClick: (e?: any) => void;
    children: React.ReactNode;
    label?: string;
}

export const Btn: React.FC<IBtnProps> = ({ onClick, children, label }): JSX.Element => {
    return (
        <button className='Btn' onClick={onClick} data-testid="btn">
            {label || children}
        </button>
    )
}

export default Btn;
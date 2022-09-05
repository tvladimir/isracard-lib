import React from 'react';
import './Btn.css';

export interface IBtnProps {
    onClick: (e?: any) => void;
    children: React.ReactNode;
}

export const Btn: React.FC<IBtnProps> = ({ onClick, children }): JSX.Element => {
    return (
        <button className='Btn' onClick={onClick} data-testid="btn">
            {children}
        </button>
    )
}

export default Btn;
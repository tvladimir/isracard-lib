import React from "react";

import './Line.css';

export interface ILineProps {
    children: React.ReactNode;
    className?: string;
}
export const Line: React.FC<ILineProps> = ({ children, className }): JSX.Element => {
    return (
        <div className={`${'Line'} ${className}`}>
            {children}
        </div>
    )
}

export const Between: React.FC<ILineProps> = (props): JSX.Element => {
    return <Line {...props} className={'Between'} />
}
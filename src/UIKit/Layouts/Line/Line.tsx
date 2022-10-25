import React from "react";

import classes from './Line.module.scss';

export interface ILineProps {
    children: React.ReactNode;
    className?: string;
}
export const Line: React.FC<ILineProps> = ({ children, className }): JSX.Element => {
    return (
        <div className={`${classes.Line} ${className}`}>
            {children}
        </div>
    )
}

export const Between: React.FC<ILineProps> = (props): JSX.Element => {
    return <Line {...props} className={classes.Between} />
}
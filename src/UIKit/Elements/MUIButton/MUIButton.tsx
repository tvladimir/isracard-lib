import React from 'react';
import Button from '@mui/material/Button';

export interface IMUIButtonProps {
    onClick: (e?: any) => void;
    children: React.ReactNode;
}

export const MUIButton: React.FC<IMUIButtonProps> = ({ children }): JSX.Element => {
    return (
        <Button variant="contained">{ children }</Button>
    )
}
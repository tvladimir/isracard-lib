import React from 'react';
import Button from '@mui/material/Button';

export interface IMUIButtonProps {
    onClick: (e?: any) => void;
    children: React.ReactNode;
}

export const MUIButton: React.FC<IMUIButtonProps> = ({ children }): JSX.Element => {
    return (
        <Button 
            sx={{
                '&.MuiButton-root': {
                    border: 'solid 1px var(--primary)',
                },
            }}
            variant="contained" 
            >{ children }</Button>
    )
}
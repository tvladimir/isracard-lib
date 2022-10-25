import React from 'react';
export interface IMUIButtonProps {
    onClick: (e?: any) => void;
    children: React.ReactNode;
}
export declare const MUIButton: React.FC<IMUIButtonProps>;

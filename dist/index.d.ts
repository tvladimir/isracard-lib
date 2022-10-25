import React from 'react';

interface IBtnProps {
    onClick: (e?: any) => void;
    children: React.ReactNode;
    label?: string;
}
declare const Btn: React.FC<IBtnProps>;

interface IMUIButtonProps {
    onClick: (e?: any) => void;
    children: React.ReactNode;
}
declare const MUIButton: React.FC<IMUIButtonProps>;

export { Btn, IBtnProps, IMUIButtonProps, MUIButton };

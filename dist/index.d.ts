/// <reference types="react" />
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

interface ILineProps {
    children: React.ReactNode;
    className?: string;
}
declare const Line: React.FC<ILineProps>;
declare const Between: React.FC<ILineProps>;

declare const Cube: () => JSX.Element;

export { Between, Btn, Cube, IBtnProps, ILineProps, IMUIButtonProps, Line, MUIButton };

import React from 'react';
import './Btn.css';
export interface IBtnProps {
    onClick: (e?: any) => void;
    children: React.ReactNode;
    label?: string;
}
export declare const Btn: React.FC<IBtnProps>;
export default Btn;

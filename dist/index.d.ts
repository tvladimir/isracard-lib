import React from 'react';

interface IBtnProps {
    onClick: (e?: any) => void;
    children: React.ReactNode;
}
declare const Btn: React.FC<IBtnProps>;

export { Btn, IBtnProps };

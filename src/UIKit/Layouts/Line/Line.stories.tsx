import React from 'react';
import { Cube } from '../Cube/Cube';

import { Line, Between } from './Line';

export default {
    /* 👇 The title prop is optional.
    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'Line',
    component: Line,
};

export const Primary = () => (
    <Line>
        <Cube />
        <Cube />
    </Line>
);

export const LineBetween = () => (
    <Between>
        <Cube />
        <Cube />
        <Cube />
    </Between>
);
import React from 'react';

import { Btn } from './Btn';

export default {
    /* 👇 The title prop is optional.
    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'Btn',
    component: Btn,
};

export const Primary = () => <Btn onClick={() => { console.log('hello') }} label="Hello">Btn</Btn>;
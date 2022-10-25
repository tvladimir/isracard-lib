import React from 'react';

import { MUIButton } from './MUIButton';

export default {
    /* 👇 The title prop is optional.
    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'MUIButton',
    component: MUIButton,
};

export const Primary = () => <MUIButton onClick={() => { console.log('hello') }}>MUIButton</MUIButton>;
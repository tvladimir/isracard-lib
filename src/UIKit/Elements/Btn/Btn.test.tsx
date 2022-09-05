/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, fireEvent } from "@testing-library/react";

import { Btn } from "./Btn";

describe("<Btn />", () => {
    test("renders the Btn component", () => {
        const handler = jest.fn();

        render(<Btn onClick={handler}>Click Me</Btn>);
    });

    test("event should be triggered onclick ", () => {
        const handler = jest.fn();

        const { getByTestId } = render(<Btn onClick={handler}>Click Me</Btn>);
        fireEvent(getByTestId('btn'), new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
        }));

        expect(handler).toBeCalledTimes(1);
    });
});
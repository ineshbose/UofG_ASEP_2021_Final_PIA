import * as React from 'react';
import 'regenerator-runtime/runtime';
import {cleanup, fireEvent, render} from '@testing-library/react';
import App from './App';

global.fetch = jest.fn((input, init) => {
  const jsonToReturn = {};
  const url = input.replace(/\/$/, '');
  const path = url.substring(url.lastIndexOf('/') + 1);

  if (init && init.method === 'POST') {
    const {num1, num2} = JSON.parse(init.body);

    switch (path) {
      case 'exponent':
        jsonToReturn.result = num1 ** num2;
        break;
    }
  }

  return Promise.resolve({json: () => Promise.resolve(jsonToReturn)});
});

afterEach(cleanup);

test('Test calculator', async () => {
  const component = render(<App />);
  const buttons = component.getAllByRole('button');
  const equalsButton = buttons.find((button) => button.textContent === '=');
  const resetButton = buttons.find((button) => button.textContent === 'AC');
  const numButtons = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) =>
    buttons.find((button) => button.textContent === `${num}`),
  );
  const resultDisplay = component.getByTestId('result-display');

  /** Exponent Tests */
  const exponentButton = buttons.find((button) => button.textContent === '^');

  // Test 1: 2 ^ 3 = 8
  fireEvent.click(numButtons[2]);
  fireEvent.click(exponentButton);
  fireEvent.click(numButtons[3]);
  fireEvent.click(equalsButton);

  await new Promise((r) => setTimeout(r, 1500));
  expect(resultDisplay.textContent).toBe('8');
  fireEvent.click(resetButton);

  // Test 2: 7 ^ 14 != 100
  fireEvent.click(numButtons[7]);
  fireEvent.click(exponentButton);
  fireEvent.click(numButtons[1]);
  fireEvent.click(numButtons[4]);
  fireEvent.click(equalsButton);

  await new Promise((r) => setTimeout(r, 1500));
  expect(resultDisplay.textContent).not.toBe('100');
  fireEvent.click(resetButton);
});

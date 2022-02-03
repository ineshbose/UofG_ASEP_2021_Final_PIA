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

      case 'multiply':
        jsonToReturn.result = num1 * num2;
        break;

      case 'addition':
        jsonToReturn.result = num1 + num2;
        break;

      case 'subtract':
        jsonToReturn.result = num1 - num2;
        break;

      case 'divide':
        jsonToReturn.result = num1 / num2;
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


  /** Multiplication Tests */
  const multiplyButton = buttons.find((button) => button.textContent === '×');

  // Test 1: 5 * 6 = 30
  fireEvent.click(numButtons[5]);
  fireEvent.click(multiplyButton);
  fireEvent.click(numButtons[6]);
  fireEvent.click(equalsButton);

  await new Promise((r) => setTimeout(r, 1500));
  expect(resultDisplay.textContent).toBe('30');
  fireEvent.click(resetButton);

  // Test 2: 12 * 7 != 225
  fireEvent.click(numButtons[1]);
  fireEvent.click(numButtons[2]);
  fireEvent.click(multiplyButton);
  fireEvent.click(numButtons[7]);
  fireEvent.click(equalsButton);

  await new Promise((r) => setTimeout(r, 1500));
  expect(resultDisplay.textContent).not.toBe('225');
  fireEvent.click(resetButton);


  /** Addition Tests */
  const additionButton = buttons.find((button) => button.textContent === '+');

  // // Test 1: 1 + 1 = 2
  fireEvent.click(numButtons[1]);
  fireEvent.click(additionButton);
  fireEvent.click(numButtons[1]);
  fireEvent.click(equalsButton);

  await new Promise((r) => setTimeout(r, 1500));
  expect(resultDisplay.textContent).toBe('2');
  fireEvent.click(resetButton);

  // Test 2: 14 + 9 != 100
  fireEvent.click(numButtons[1]);
  fireEvent.click(numButtons[4]);
  fireEvent.click(additionButton);
  fireEvent.click(numButtons[9]);
  fireEvent.click(equalsButton);

  await new Promise((r) => setTimeout(r, 1500));
  expect(resultDisplay.textContent).not.toBe('100');
  fireEvent.click(resetButton);

  /** Subtract Tests */
  const subtractButton = buttons.find((button) => button.textContent === '-');

  // Test 1: 3 - 2 = 1
  fireEvent.click(numButtons[3]);
  fireEvent.click(subtractButton);
  fireEvent.click(numButtons[2]);
  fireEvent.click(equalsButton);

  await new Promise((r) => setTimeout(r, 1500));
  expect(resultDisplay.textContent).toBe('1');
  fireEvent.click(resetButton);

  // Test 2: 8 - 5 != 100
  fireEvent.click(numButtons[8]);
  fireEvent.click(subtractButton);
  fireEvent.click(numButtons[5]);
  fireEvent.click(equalsButton);

  await new Promise((r) => setTimeout(r, 1500));
  expect(resultDisplay.textContent).not.toBe('100');
  fireEvent.click(resetButton);

  // Test 3: 2 - 3 = -1
  fireEvent.click(numButtons[3]);
  fireEvent.click(subtractButton);
  fireEvent.click(numButtons[2]);
  fireEvent.click(equalsButton);

  await new Promise((r) => setTimeout(r, 1500));
  expect(resultDisplay.textContent).toBe('-1');
  fireEvent.click(resetButton);


  /** Division Tests */
  const divideButton = buttons.find((button) => button.textContent === '÷');

  // Test 1: 8 ÷ 4 = 2
  fireEvent.click(resetButton);
  fireEvent.click(numButtons[8]);
  fireEvent.click(divideButton);
  fireEvent.click(numButtons[4]);
  fireEvent.click(equalsButton);

  await new Promise((r) => setTimeout(r, 1500));
  expect(resultDisplay.textContent).toBe('2');
  fireEvent.click(resetButton);

  // Test 2: 5 ÷ 2 != 100
  fireEvent.click(numButtons[5]);
  fireEvent.click(divideButton);
  fireEvent.click(numButtons[2]);
  fireEvent.click(equalsButton);

  await new Promise((r) => setTimeout(r, 1500));
  expect(resultDisplay.textContent).not.toBe('100');
  fireEvent.click(resetButton);
});

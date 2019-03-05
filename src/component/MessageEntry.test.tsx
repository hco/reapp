import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';
import { MessageEntry } from './MessageEntry';

const onSubmit = jest.fn();
const setup = () => {
  const utils = render(<MessageEntry onSubmit={onSubmit} />);
  const input = utils.getByTitle('Message') as HTMLInputElement;
  const button = utils.getByText('Send') as HTMLButtonElement;
  const form = input.form;
  return {
    input,
    button,
    form,
    ...utils
  };
};

describe('MessageEntry', () => {
  afterEach(cleanup);
  test('It should accept changes', () => {
    const { input } = setup();
    fireEvent.change(input, { target: { value: 'This is a test' } });
    expect(input.value).toBe('This is a test');
  });

  test('It should call the callback with the entered value', () => {
    const { input, button } = setup();
    fireEvent.change(input, { target: { value: 'This is a test' } });
    fireEvent.click(button);
    expect(onSubmit).toBeCalledWith({ message: 'This is a test' });
  });

  test('It should clear the input after sending', () => {
    const { input, button } = setup();
    fireEvent.change(input, { target: { value: 'This is a test' } });
    fireEvent.click(button);
    expect(input.value).toBe('');
  });
});

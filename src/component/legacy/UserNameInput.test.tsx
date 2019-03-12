import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import { UserNameInput } from './UserNameInput';

describe('<MessageListItem />', () => {
  it('Should emit an empty username for empty localStorage', async () => {
    const onChange = jest.fn();
    const actual = render(<UserNameInput onChange={onChange} />);
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith('');
  });

  test('Entering a value emits an onChange', async () => {
    const onChange = jest.fn();
    const actual = render(<UserNameInput onChange={onChange} />);

    fireEvent.change(actual.getByTitle('userName'), {
      target: { value: 'foobar' }
    });

    expect(onChange).toHaveBeenCalledTimes(2);
    expect(onChange).toHaveBeenCalledWith('foobar');
  });

  test('Reading a username from localStorage works', async () => {
    localStorage.setItem('reappUserName', 'Elmar');
    const onChange = jest.fn();
    const actual = render(<UserNameInput onChange={onChange} />);
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith('Elmar');
  });
});

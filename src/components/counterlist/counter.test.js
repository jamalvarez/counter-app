import Counter from './counter';
import React from 'react';
import {shallow} from 'enzyme';

const onClick = jest.fn();
const wrapper = shallow(<Counter {...{id:'123', title:'title', count:'2', onAction, onFailure}} />);

it('Renders a div with id "counter-adder"', () => {
  expect(wrapper.find('#counter-adder').length).toBe(1);
})

it('Calls the raisepopup function prop on click', () => {
  wrapper.find('#counter-adder').simulate('click');
  expect((onClick)).toHaveBeenCalled();
})
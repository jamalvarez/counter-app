import Counter from './counter';
import React from 'react';
import {shallow} from 'enzyme';

const onClick = jest.fn();
let wrapper;
let actions;
beforeEach(() => {
  actions = {remove:jest.fn(), increase:jest.fn(), decrease:jest.fn()};
  wrapper = shallow(<Counter {...{id:'123', title:'title', count:2, actions}} />);
})

it('Renders divs with the classes remove, title, decrease, increase and countnumber', () => {
  expect(wrapper.find('.title').length).toBe(1);
  expect(wrapper.find('.remove').length).toBe(1);
  expect(wrapper.find('.decrease').length).toBe(1);
  expect(wrapper.find('.increase').length).toBe(1);
  expect(wrapper.find('.countnumber').length).toBe(1);

})

it('Calls the decrease action when .decrease is clicked', () => {
  wrapper.find('.decrease').simulate('click');
  expect((actions.decrease)).toHaveBeenCalled();
})

it('Doesn\'t call the decrease action when the count is 0', () => {
  wrapper = shallow(<Counter {...{id:'123', title:'title', count:0, actions}} />);
  wrapper.find('.decrease').simulate('click');
  expect((actions.decrease)).not.toHaveBeenCalled();
})

it('Calls the increase action when .decrease is clicked', () => {
  wrapper.find('.increase').simulate('click');
  expect((actions.increase)).toHaveBeenCalled();
})

it('Calls the remove action when .decrease is clicked', () => {
  wrapper.find('.remove').simulate('click');
  expect((actions.remove)).toHaveBeenCalled();
})
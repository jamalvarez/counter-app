import Insideman from './insideman';
import React from 'react';
import { shallow } from 'enzyme';

const onClick = jest.fn();
const wrapper = shallow(<Insideman  onClick={onClick}/>);

it('Renders a div with id "insideman"', () => {
  expect(wrapper.find('#insideman').length).toBe(1);
})

it('Calls the onClick function prop on click', () => {
  wrapper.find('#insideman').simulate('click');
  expect((onClick)).toHaveBeenCalled();
})
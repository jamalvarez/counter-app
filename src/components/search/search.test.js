import Search from './index';
import React from 'react';
import {shallow} from 'enzyme';

const onChange = jest.fn();
const wrapper = shallow(<Search  onChange={onChange}/>);

it('Renders a div with id "searchbar"', () => {
  expect(wrapper.find('#searchbar').length).toBe(1);
});

it('Renders an input inside the #searchbar div', () => {
  expect(wrapper.find('#searchbar input').length).toBe(1);
})
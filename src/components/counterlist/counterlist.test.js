import Counterlist from "./index";
import React from "react";
import { mount } from "enzyme";

let raisepopup, wrapper;
const counterarray = [{id:123,title:'some title', count:2}];
beforeEach(() => {
  raisepopup = jest.fn();
  wrapper = mount(
    <Counterlist
      counterarray={counterarray}
      raisepopup={raisepopup}
      actions={{}}
    />
  );
});

it('Renders a div with id "counter-list"', () => {
  expect(wrapper.find('#counter-list').length).toBe(1);
});

it('Contains as many .counter elements as the counterarray prop\'s lenght, plus one', () => {
  expect(wrapper.find('.counter').length).toBe(counterarray.length + 1);
})

it('Renders a div with the id "insideman" ', () => {
  expect(wrapper.find("#insideman").length).toBe(1);
});

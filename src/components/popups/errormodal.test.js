import Errormodal from "./errormodal";
import React from "react";
import { mount } from "enzyme";

let onAccept, wrapper;
beforeEach(() => {
  onAccept = jest.fn();
  wrapper = mount(<Errormodal onAccept={onAccept} />);
});

it('Renders a div with class "backdrop"', () => {
  expect(wrapper.find(".backdrop").length).toBe(1);
});

it('Renders a div with id "error-modal"', () => {
  expect(wrapper.find("#error-modal").length).toBe(1);
});

it("Calls the save action when the button inside #error-modal is clicked", () => {
  wrapper.find("button").simulate("click");
  expect(onAccept).toHaveBeenCalled();
});

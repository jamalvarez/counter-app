import CreationModal from "./creationmodal";
import React from "react";
import { mount } from "enzyme";

let onSave, showPopup, wrapper;
beforeEach(() => {
  onSave = jest.fn();
  showPopup = jest.fn();
  wrapper = mount(<CreationModal {...{ onSave, showPopup }} />);
});

it('Renders a div with class "backdrop"', () => {
  expect(wrapper.find(".backdrop").length).toBe(1);
});

it('Renders a div with id "creation-modal"', () => {
  expect(wrapper.find("#creation-modal").length).toBe(1);
});

it("Calls the save action when #savecounter is clicked", () => {
  wrapper.find("#savecounter").simulate("click");
  expect(onSave).toHaveBeenCalled();
});
it("Calls showpopup action when #cancel is clicked", () => {
  wrapper.find("#cancel").simulate("click");
  expect(showPopup).toHaveBeenCalled();
});

import React from "react";
import App from "./App";
import Enzyme, { render, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("Button tests", () => {
  const wrapper = shallow(<App />);

  it("Dodano poprawnie komponent App", () => {
    expect(!!wrapper).toBe(true);
  });
  it("Dodano nagłówek z odpowiednim tekstem", () => {
    expect(wrapper.find("h1").text()).toMatch("Pierwszy komponent w React");
  });
  it("Dodano paragraf z odpowiednim tekstem", () => {
    expect(wrapper.find("p").text()).toMatch("Nie taki diabeł straszny");
  });
});

import React from 'react';
import { shallow } from 'enzyme';
import { FormSubmitButton } from "./FormSubmitButton";


describe('FormSubmitButton component', () => {
    const wrapper = shallow(<FormSubmitButton classes={{}} />);
    it('shallow renders without crashing', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
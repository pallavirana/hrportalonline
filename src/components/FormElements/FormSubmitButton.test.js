import React from 'react';
import { shallow } from 'enzyme';
import { FormSubmitButton } from "./FormSubmitButton";


describe('FormSubmitButton component', () => {
    it('shallow renders without crashing', () => {
      const wrapper = shallow(<FormSubmitButton classes={{}} />);
      expect(wrapper).toMatchSnapshot();
    });
  });
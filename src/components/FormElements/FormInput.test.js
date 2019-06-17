import React from 'react';
import { shallow } from 'enzyme';
import { FormInput } from "./FormInput";


describe('FormInput component', () => {
    it('shallow renders without crashing', () => {
      const wrapper = shallow(<FormInput classes={{}} />);
      expect(wrapper).toMatchSnapshot();
    });
  });
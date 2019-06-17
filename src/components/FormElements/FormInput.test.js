import React from 'react';
import { shallow } from 'enzyme';
import { FormInput } from "./FormInput";


describe('FormInput component', () => {
    const onChange = jest.fn();
    const wrapper = shallow(<FormInput classes={{}} onChange={onChange} />);
    it('shallow renders without crashing', () => {
      expect(wrapper).toMatchSnapshot();
    });
    it('input change the value', () => {
      wrapper.find('input').simulate('change')
      expect(onChange).toHaveBeenCalled();
    });
  });
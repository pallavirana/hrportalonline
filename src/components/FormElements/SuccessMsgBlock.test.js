import React from 'react';
import { shallow } from 'enzyme';
import { SuccessMsgBlock } from "./SuccessMsgBlock";


describe('SuccessMsgBlock component', () => {
    it('shallow renders without crashing', () => {
      const wrapper = shallow(<SuccessMsgBlock classes={{}} />);
      expect(wrapper).toMatchSnapshot();
    });
  });
import React from 'react';
import { shallow } from 'enzyme';
import {Login} from './Login.component';
import { FormInput } from '../../components/FormElements';


describe('Login', () => {
    const wrapper = shallow(<Login classes={{}} />);
    it('shallow renders without crashing', () => {
        expect(wrapper).toMatchSnapshot();
    });
});

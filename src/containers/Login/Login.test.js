import React from 'react';
import { shallow } from 'enzyme';
import {Login} from './Login.component';
import {FormInput, FormSubmitButton} from '../../components/FormElements'


describe('Login', () => {
    const wrapper = shallow(<Login classes={{}} />);
    it('should have an input for the username', function () {
        expect(wrapper.find(FormInput)).toHaveLength(2);
    });
    it('should have a button', function () {
        expect(wrapper.find(FormSubmitButton)).toHaveLength(1);
    });
});

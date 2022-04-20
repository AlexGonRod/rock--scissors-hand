import React from 'react';
import {shallow} from 'enzyme';
import '@testing-library/jest-dom'
import Play from '../components/Play';

describe('<Play />', () => {
    let wrapper = shallow(<Play />);
    beforeEach(() => {
        wrapper = shallow(<Play />);
    });
    test('<Play /> renders', () => {
        expect(wrapper).toMatchSnapshot();
    })
});
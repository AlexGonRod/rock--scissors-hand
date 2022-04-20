import React from 'react';
import {shallow} from 'enzyme';
import '@testing-library/jest-dom'
import Header from '../components/Header';

describe('<Header />', () => {
    let wrapper = shallow(<Header />);
    beforeEach(() => {
        wrapper = shallow(<Header />);
    });
    test('<Header /> renders', () => {
        expect(wrapper).toMatchSnapshot();
    })
});
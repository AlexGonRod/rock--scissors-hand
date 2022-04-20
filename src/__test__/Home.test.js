import React from 'react';
import {shallow} from 'enzyme';
import '@testing-library/jest-dom'
import Home from '../components/Home';

describe('<Home />', () => {
    let wrapper = shallow(<Home />);
    beforeEach(() => {
        wrapper = shallow(<Home />);
    });
    beforeEach(() => {
        wrapper = shallow(<Home />);
    });
    test('<Home /> renders', () => {
        expect(wrapper).toMatchSnapshot();
    })
});
import React from 'react';
import {shallow} from 'enzyme';
import '@testing-library/jest-dom'
import Nav from '../components/Nav';

describe('<Nav />', () => {
    let wrapper = shallow(<Nav />);
    beforeEach(() => {
        wrapper = shallow(<Nav />);
    });
    test('<Nav /> renders', () => {
        expect(wrapper).toMatchSnapshot();
    })
    test('<Nav /> user prop', () => {
        const user='test-user';
        
        const wrapper = shallow(<Nav user={user}/>)
        expect(wrapper.find('.user-text span').length).toEqual(1);
    })
});
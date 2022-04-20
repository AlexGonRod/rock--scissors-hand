import React from 'react';
import {shallow} from 'enzyme';
import '@testing-library/jest-dom'
import Icon from '../components/Icon';

describe('<Icon />', () => {
    let wrapper = shallow(<Icon />);
    beforeEach(() => {
        wrapper = shallow(<Icon />);
    });
    test('<Icon /> renders', () => {
        expect(wrapper).toMatchSnapshot();
    })
    test('<Icon /> className prop', () => {
        const className='test-class';
        
        const wrapper = shallow(<Icon className={className}/>)
        expect(wrapper.find('.test-class').length).toEqual(1);
    })
    test('<Icon /> onClick prop', () => {
        let state= false;
        const className='test-class';

        const wrapper = shallow(<Icon className={className} onClick={() => {state = true} }/>)
        const button = wrapper.find('.test-class').simulate('click');
        expect(state).toEqual(true);
    })
});
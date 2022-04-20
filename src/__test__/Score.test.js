import React from 'react';
import {shallow} from 'enzyme';
import '@testing-library/jest-dom'
import Score from '../components/Score';

describe('<Score />', () => {
    let wrapper = shallow(<Score />);
    beforeEach(() => {
        wrapper = shallow(<Score />);
    });
    test('<Score /> renders', () => {
        expect(wrapper).toMatchSnapshot();
    })
    test('<Score /> text prop', () => {
        const text='Score';

        const wrapper = shallow(<Score text={text}/>)
        expect(wrapper.find('.score-box span').text().trim()).toBe(text);
    })
    test('<Score /> className prop', () => {
        const className='test-class';
        
        const wrapper = shallow(<Score className={className}/>)
        expect(wrapper.find('.score-box .test-class').length).toEqual(1);
    })
    test('<Score /> score prop', () => {
        const score= '0';
        const className='test-class';

        const wrapper = shallow(<Score className={className} score={score}/>)
        expect(wrapper.find('.score-box .test-class').text().trim()).toEqual(score);
    })
});
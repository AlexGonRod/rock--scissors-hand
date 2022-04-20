import React from 'react';
import {shallow} from 'enzyme';
import '@testing-library/jest-dom'
import Game from '../components/Game';

describe('<Game />', () => {
    let wrapper = shallow(<Game />);
    beforeEach(() => {
        wrapper = shallow(<Game />);
    });
    test('<Game /> renders', () => {
        expect(wrapper).toMatchSnapshot();
    })
    test('<Game /> renders text', () => {
        expect(wrapper.find('.game__you .text').length).toEqual(1);
        expect(wrapper.find('.game__you .text').text().trim()).toBe('You');
    })
    test('<Game /> renders children when counter != 0', () => {
        const counter = 1;
        const wrapper = shallow(<Game counter={counter}/>)
        expect(wrapper.find('.game__play').length).toEqual(0);
    })
    test('<Game /> renders children when counter = 0', () => {
        const counter = 0;
        const wrapper = shallow(<Game counter={counter}/>)
        expect(wrapper.find('.game__play').length).toEqual(1);
    })
    // This test has to be fixed. Maybe a setTimeout?
    // test('<Game /> renders you win when success', () => {
    //     const counter = 0,
    //         myChoice = 'rock',
    //         computerChoice='scissors',
    //         playerWin = 'Win';

    //     const wrapper = shallow(<Game myChoice={myChoice} computerChoice={computerChoice} counter={counter}/>)
    //     expect(wrapper.find('.game__play .text').text()).toBe('You Win');
    // })
});
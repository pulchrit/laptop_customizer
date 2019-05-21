import React from 'react';
import ReactDOM from 'react-dom';
import Cart from "./Cart";
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';


describe("Cart component", () => {
    
    const selected = {
        Processor: {
            name: '17th Generation Intel Core HB (7 Core with donut spare)',
            cost: 700
        },
        "Operating System": {
            name: 'Ubuntu Linux 16.04',
            cost: 200
        },
        "Video Card": {
            name: 'Toyota Corolla 1.5v',
            cost: 1150.98
        },
        Display: {
            name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
            cost: 1500
        }
    };
    

    // smoke test
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Cart />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    // snapshot test
    it('renders cart with selected items', () => {
        const wrapper = shallow(<Cart selectedState={selected} />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    // snapshot test?? Would this test make sense to add with a blank state object? 
    // I can't tell if there would be a default case where no selections were made...
    /* it('renders cart with no items', () => {

    }); */

});

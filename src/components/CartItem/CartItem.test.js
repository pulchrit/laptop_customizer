import React from 'react';
import ReactDOM from 'react-dom';
import CartItem from "./CartItem";
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe("CartItem component", () => {
    
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

    const selectedFeatureName = "Display";

    // smoke test
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<CartItem />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    // snapshot test
    it('renders Display cart item', () => {
        const wrapper = shallow(<CartItem 
            key={selectedFeatureName}
            selectedFeatureName={selectedFeatureName}
            selectedState={selected}
        />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});


{/* This is how CartItem is called:
    <CartItem 
                    key={key}
                    selectedFeatureName={key}
                    selectedState={this.props.selectedState}
                /> */}
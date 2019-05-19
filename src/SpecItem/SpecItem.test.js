import React from 'react';
import ReactDOM from 'react-dom';
import SpecItem from "./SpecItem";

describe("SpecItem component", () => {
    
    // smoke test
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<SpecItem />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});

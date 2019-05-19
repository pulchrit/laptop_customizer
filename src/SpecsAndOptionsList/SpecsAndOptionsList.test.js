import React from 'react';
import ReactDOM from 'react-dom';
import SpecsAndOptionsList from "./SpecsAndOptionsList";

describe("SpecsAndOptionsList component", () => {
    
    // smoke test
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<SpecsAndOptionsList />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});
# Laptop Customizer
_Starter project for React course_

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Updated app to decompose components into modular, encapsulated units that perform a single function. 

### Full Components List (also illustrates component hierarchy)
- App.js
    - Header
    - SpecsAndOptionsList
        - SpecItem (multiple as needed)
    - Cart
        - CartItem (multiple as needed)
        - Total

### State and Interactivity
State live in App.js and is passed to SpecsandOptionsList and Cart and their children through a callback prop.

### Tests
Each component has a small test suite including a smoke test to ensure proper rendering and a few snapshot tests 
to ensure the UI renders as expected when changes are made to the code.


# Laptop Customizer
_Starter project for React course_

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

____

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
State lives in App.js and is passed to SpecsandOptionsList and Cart and their children through a callback prop.



import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header/Header";
import SpecsAndOptionsList from "./components/SpecsAndOptionsList/SpecsAndOptionsList";
import Cart from "./components/Cart/Cart";

class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      selected: {
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
      }
    }
  }

static defaultProps = {
    features: {
      Processor: [],
      "Operating System": [],
      "Video Card": [],
      Display: []
    }
};

  updateFeature(feature, newValue) {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  }

  render() {

    return (
      <div className="App">
        <Header />    
        
        <main>  
          
          <SpecsAndOptionsList 
            features={this.props.features}
            selectedState={this.state.selected}
            handleUpdateFeatures={(feature, newValue) => this.updateFeature(feature, newValue)}
          />
         
          <Cart selectedState={this.state.selected} />
        </main>
      </div>
    );
  }
}

export default App;  

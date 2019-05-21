import React from 'react';
import "../../App.css";
import CartItem from "../CartItem/CartItem";
import Total from "../Total/Total";

class Cart extends React.Component {
    
    render() {

        const summary = Object.keys(this.props.selectedState)
            .map(key => 
                <CartItem 
                    key={key}
                    selectedFeatureName={key}
                    selectedState={this.props.selectedState}
                />
            );
            
        return (
            <section className="main__summary">
                <h3>NEW GREENLEAF 2018</h3>
                {summary}
                <Total selectedState={this.props.selectedState} />
            </section>
        );
    }
}

export default Cart;


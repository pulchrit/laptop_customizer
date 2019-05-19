import React from 'react';
import "../App.css";

class CartItem extends React.Component {

    render() {
        
        return (
            <div className="summary__option" key={this.props.selectedFeatureName}>
                
                <div className="summary__option__label">
                    {this.props.selectedFeatureName}
                </div>
                
                <div className="summary__option__value">
                    {this.props.selectedState[this.props.selectedFeatureName].name}
                </div>
                
                <div className="summary__option__cost">
                    { new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                    .format(this.props.selectedState[this.props.selectedFeatureName].cost) }
                </div>
            </div>

        );
    }
}

export default CartItem;
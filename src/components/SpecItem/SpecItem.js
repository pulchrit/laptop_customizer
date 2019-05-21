import React from 'react';
import "../../App.css";

class SpecItem extends React.Component {

    render() {

        const options = this.props.options.map((item, index) => {
            
            const selectedClass = item.name === this.props.selectedState[this.props.featureName].name ? 'feature__selected' : '';
            const featureClass = 'feature__option ' + selectedClass;
            
            return <li key={index} className="feature__item">
                        <div 
                            className={featureClass}
                            onClick={e => this.props.handleUpdateFeatures(this.props.featureName, item)}>
                                { item.name }
                                ({ new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                                .format(item.cost) })
                        </div>
                    </li>
        });

        return (
            <div className="feature" key={this.props.featureName}>
                <div className="feature__name">{this.props.featureName}</div>
                    
                    <ul className="feature__list">
                        { options }
                    </ul>
          </div>
        );
    }
}

export default SpecItem;
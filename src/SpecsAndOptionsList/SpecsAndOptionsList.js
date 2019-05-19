import React from 'react';
import "../App.css";
import SpecItem from "../SpecItem/SpecItem";

class SpecsAndOptionsList extends React.Component {

    render() {

        const features = Object.keys(this.props.features)
            .map(key => 
                <SpecItem 
                    key={key} 
                    featureName={key}
                    selectedState={this.props.selectedState}
                    options={this.props.features[key]}
                    handleUpdateFeatures={this.props.handleUpdateFeatures}
                />
            );

        return (
            <section className="main__form">
                <h3>TECH SPECS AND CUSTOMIZATIONS</h3>
                { features }
            </section>
        );
    }
}


export default SpecsAndOptionsList;

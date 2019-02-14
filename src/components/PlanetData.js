import React, {Component} from 'react';
import '../css/planetData.css';

class PlanetData extends Component {
    formatPopulation() {
        if (this.props.population === 'unknown') {
            return this.props.population;
        }
        return parseInt(this.props.population, 10).toLocaleString();

    }
    render() {
        return (
            <div className="data">
                <p>
                    <b>Population: </b>
                    {this.formatPopulation()}
                </p>
                <p>
                    <b>Terrain: </b>
                    {this.props.terrain}
                </p>
                <p>
                    <b>Climate: </b>
                    {this.props.climate}
                </p>
            </div>
        );
    }
}

export default PlanetData;
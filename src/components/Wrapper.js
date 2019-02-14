import React, {Component} from 'react';
import Header from './Header';
import PlanetData from './PlanetData';
import FilmData from './FilmData';
import Button from './Button';
import '../css/wrapper.css';

const minValue = Math.ceil(1);
const maxValue = Math.floor(61);

class Wrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: null,
            data: []
        };
        this.btnClick = this.btnClick.bind(this);
    }

    randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    async getData() {
        const endpoint = `https://swapi.co/api/planets/${this.state.number}`; 
        const request = new Request(endpoint);
        const apiData = await fetch(request).then(response => response.json());
        return apiData;
    }

    btnClick() {
       this.setState({number: (this.randomNumber(minValue, maxValue))});
       this.getData().then(data => this.setState({data}));
    }

    componentWillMount() {
        return this.setState({number: (this.randomNumber(minValue, maxValue))});
    }

    async componentDidMount() {
       this.setState({number: (this.randomNumber(minValue, maxValue))});
        this.getData().then(data => this.setState({data}));
    }

    render() {
        const dados = this.state.data;
        const filmes = dados.films || [];
        return (
            <div className="wrapper">
                <Header planetName={dados.name} />
                <PlanetData population={dados.population} terrain={dados.terrain} climate={dados.climate} />
                <FilmData filmCount={filmes.length} />
                <Button onClick={this.btnClick} />
            </div>
        );
    }
}

export default Wrapper;
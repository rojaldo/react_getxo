import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
import Slider from 'rc-slider';
import Container from 'react-bootstrap/Container'
import 'rc-slider/assets/index.css';

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);

const style = { width: 400, margin: 50 };

class Beers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            beersArray: [],
            visualizationArray: [], 
            lowerBound: 0,
            upperBound: 40,
            value: [4, 6],
        };

    }

    componentWillMount() {
        this.doRequest();
    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {

    }

    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }

    componentWillUpdate(nextProps, nextState) {

    }

    componentDidUpdate(prevProps, prevState) {

    }

    componentWillUnmount() {

    }

    doRequest() {
        fetch('https://api.punkapi.com/v2/beers')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data);
                const myBeers = data.filter((beer)=>beer.abv>=this.state.value[0]&&beer.abv<=this.state.value[1]);
                this.setState({ beersArray: data, visualizationArray:myBeers })
            });
    }

    onSliderChange = (value) => {
        const myBeers = this.state.beersArray.filter((beer)=>beer.abv>=value[0]&&beer.abv<=value[1]);
        this.setState({
            value,
            visualizationArray: myBeers
        });
    }

    render() {
        const listBeers =
            this.state.visualizationArray.map((beer, i) =>
                <Card key={i} style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>{beer.name}</Card.Title>
                        <Card.Text>
                            {beer.description}
                        </Card.Text>
                        <p>{beer.abv}</p>
                    </Card.Body>
                </Card>
            );

        return (
            <Container>
                <Range className="m-4" allowCross={false} value={this.state.value} onChange={this.onSliderChange} />
                <CardColumns>
                    {listBeers}
                </CardColumns>
            </Container>
        );
    }
}

Beers.propTypes = {

};

export default Beers;
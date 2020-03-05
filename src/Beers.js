import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';

class Beers extends Component {
    constructor(props) {
        super(props);
        this.state = {beersArray: []};

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
                this.setState({ beersArray: data })
            });
    }

    render() {
        const listBeers =
            this.state.beersArray.map((beer, i) =>
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
            <CardColumns>
                {listBeers}
            </CardColumns>
        );
    }
}

Beers.propTypes = {

};

export default Beers;
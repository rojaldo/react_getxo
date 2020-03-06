import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TrivialCard from '../../models/TrivialCard';
import TrivialCardComponent from './TrivialCardComponent';

class Trivial extends Component {
    constructor(props) {
        super(props);
        this.state = { info: {}, cards: [] }

    }

    componentWillMount() {
        this.doRequest()
    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {

    }

    shouldComponentUpdate(nextProps, nextState) {
        return true
    }

    componentWillUpdate(nextProps, nextState) {
        return true;
    }

    componentDidUpdate(prevProps, prevState) {

    }

    componentWillUnmount() {

    }

    doRequest() {
        fetch('https://opentdb.com/api.php?amount=10')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data);
                let cards = []
                for (const jsonCard of data.results) {
                    cards = [...cards, new TrivialCard(jsonCard)]
                }
                this.setState({ cards: cards })

                this.setState({ info: data })
            });
    }


    render() {

        const cards =
            this.state.cards.map((card, i) => <TrivialCardComponent myCard={card}></TrivialCardComponent>
            );

        return (
            <div class="container">
                <div className="row">
                    {cards}
                </div>
            </div>
        );
    }
}

Trivial.propTypes = {

};

export default Trivial;
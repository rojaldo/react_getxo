import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Heroes extends Component {
    constructor(props) {
        super(props);

    }

    componentWillMount() {

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

    render() {
        let heroes = ['superman', 'batman'];
        const listHeroes = 
        heroes.map((hero, i) => <li key={i}>{hero}</li>);
        return (
            <div>
            <ul>
                {listHeroes}
            </ul>
            </div>
        );
    }
}

Heroes.propTypes = {

};

export default Heroes;
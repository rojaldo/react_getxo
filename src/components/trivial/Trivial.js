import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Trivial extends Component {
    constructor(props) {
        super(props);

    }

    componentWillMount() {
        this.doRequest()
    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {

    }

    shouldComponentUpdate(nextProps, nextState) {

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

                this.setState({ info: data})
            });
    }


    render() {
        return (
            <div>

            </div>
        );
    }
}

Trivial.propTypes = {

};

export default Trivial;
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Image from 'react-bootstrap/Image'
import Jumbotron from 'react-bootstrap/Jumbotron'


class ShowApod extends Component {
    constructor(props) {
        super(props);
        this.state = { info: {}, selectedDate: '' }

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
        this.doRequest()
    }

    componentDidUpdate(prevProps, prevState) {

    }

    componentWillUnmount() {

    }

    doRequest() {
        fetch('https://api.nasa.gov/planetary/apod?date=' + this.props.date + '&api_key=DEMO_KEY')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data);
                this.setState({ info: data, selectedDate: this.props.date })
            });
    }

    render() {
        return (
            <Jumbotron>
                <h1>{this.state.info.title}</h1>
                <Image src={this.state.info.url} fluid ></Image>
                <p>{this.state.info.explanation}</p>
            </Jumbotron>
        );
    }
}

ShowApod.propTypes = {

};

export default ShowApod;
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Image from 'react-bootstrap/Image'
import Jumbotron from 'react-bootstrap/Jumbotron'


class ShowApod extends Component {
    constructor(props) {
        super(props);
        this.state = { info: null, selectedDate: '' };
        this.apiKey = 'DEMO_KEY';

    }

    componentWillMount() {
    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {
        console.log('NextProps: ' + String(nextProps.date));
        this.doRequest(nextProps.date)
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

    doRequest(date) {
        if (date === undefined) {

        }
        fetch('https://api.nasa.gov/planetary/apod?date=' + date + '&api_key=' + this.apiKey)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data);
                this.setState({ info: data, selectedDate: this.props.date })
            });
    }

    render() {
        let myHtml = <h1>Loading data...</h1>
        if (this.state.info !== null) {
            myHtml = <Jumbotron>
                <h1>{this.state.info.title}</h1>
                <Image src={this.state.info.url} fluid ></Image>
                <p>{this.state.info.explanation}</p>
            </Jumbotron>
        }
        return (
            myHtml
        );
    }
}

ShowApod.propTypes = {

};

export default ShowApod;
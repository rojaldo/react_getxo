import React, { Component } from 'react';
import './Apod.css'
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment'
import ShowApod from './ShowApod';
import DateApod from './DateApod';

class Apod extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dateStr: moment(new Date()).format("YYYY-MM-DD")
        };
    }

    componentWillMount() {
    }

    componentDidMount() {
        this.handleChange(this.state.dateStr)
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

    handleChange = (date) => {
        console.log(date);
        this.setState({ dateStr: moment(date).format("YYYY-MM-DD") })
        // const dateStr = moment(date).format("YYYY-MM-DD");
        // console.log(dateStr)
    };

    render() {
        return (
            <div>
                <Container>
                    <DateApod sendDate={(date) => { this.handleChange(date) }}></DateApod>
                    <ShowApod date={this.state.dateStr}></ShowApod>
                </Container>
            </div>
        );
    }
}

Apod.propTypes = {

};

export default Apod;
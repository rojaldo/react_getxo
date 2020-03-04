import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import DatePicker from "react-datepicker";


class DateApod extends Component {
    constructor(props) {
        super(props);
        this.state = {selectedDate: new Date()}

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

    handleChange = (date) => {
        this.setState({selectedDate: date});
        this.props.sendDate(date);
    }

    render() {
        return (
            <DatePicker
                selected={this.state.selectedDate}
                onChange={this.handleChange}
            />
        );
    }
}

DateApod.propTypes = {

};

export default DateApod;
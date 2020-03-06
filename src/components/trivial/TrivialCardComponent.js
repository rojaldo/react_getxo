import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TrivialCardComponent extends Component {
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
        const buttons =
            this.props.myCard.answers.map((answer, i) =>
                <button type="button" name="" id="" className="btn btn-primary btn-lg btn-block">{answer}</button>
            );

        return (
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">{this.props.myCard.question}</h4>
                        {buttons}
                    </div>
                </div>
            </div>
        );
    }
}

TrivialCardComponent.propTypes = {

};

export default TrivialCardComponent;
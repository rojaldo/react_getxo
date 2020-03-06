import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TrivialCardComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { answered: false }

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

    handleClick(answer, i) {
        this.props.myCard.answered = true;
        this.setState({ answered: true });
        if (answer === this.props.myCard.rightAnswer) {
            this.props.myCard.right = true;
        }
        this.props.myCard.answerIndex = i;
    }

    getButton(answer, i) {
        if (this.props.myCard.answered) {
            if (answer === this.props.myCard.rightAnswer) {
                return <button type="button" name="" id="" className="btn btn-success btn-lg btn-block" disabled>{answer}</button>
            } else if (i === this.props.myCard.answerIndex && !this.props.myCard.right) {
                return <button type="button" name="" id="" className="btn btn-danger btn-lg btn-block" disabled>{answer}</button>
            } else {
                return <button type="button" name="" id="" className="btn btn-secondary btn-lg btn-block" disabled>{answer}</button>
            }
        } else {
            return <button type="button" name="" id="" className="btn btn-primary btn-lg btn-block" onClick={(answer, i) => this.handleClick(answer, i)} >{answer}</button>
        }
    }

    render() {
        const buttons =
            this.props.myCard.answers.map((answer, i) =>
                this.getButton(answer, i)
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
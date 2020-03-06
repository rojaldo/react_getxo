import React, { Component } from 'react';
import './MyCalculator.css'
import PropTypes from 'prop-types';
import Display from './Display';
import Keyboard from './Keyboard';

class MyCalculator extends Component {

    constructor(props) {
        super(props);
        this.state = { display: '' };
        [this.INITSTATE, this.FIRSTFIGURESTATE, this.SECONDFIGURESTATE, this.RESULTSTATE] = [0,1,2,3]
        this.firstFigure = 0;
        this.secondFigure = 0;
        this.operator = '';
        this.result = 0;

        // this.INITSTATE = 0;
        // this.FIRSTFIGURESTATE = 1;
        // this.SECONDFIGURESTATE = 2;
        // this.RESULTSTATE = 3;
        this.currentState = this.INITSTATE;
    }

    handleNumber(number) {
        switch (this.currentState) {
            case this.INITSTATE:
                this.firstFigure = number;
                this.setState({ display: this.state.display + number });
                this.currentState = this.FIRSTFIGURESTATE;     
                break;
            case this.FIRSTFIGURESTATE:
                this.firstFigure = this.firstFigure * 10 + number;
                this.setState({ display: this.state.display + number });
                break;
            case this.SECONDFIGURESTATE:
                this.secondFigure = this.secondFigure * 10 + number;
                this.setState({ display: this.state.display + number });                
                break;
            case this.RESULTSTATE:
                this.firstFigure = number;
                this.secondFigure = 0;
                this.operator = '';
                this.result = 0;
                this.currentState = this.FIRSTFIGURESTATE;
                this.setState({ display: number });
                break;
            default:
                break;
        }
    }

    isOperator(symbol){
        return (symbol === '+' || symbol === '-' || symbol === '*' || symbol === '/')
    }

    resolve() {
        switch (this.operator) {
            case '+':
                return this.firstFigure + this.secondFigure;
            case '-':
                return this.firstFigure - this.secondFigure;
            case '*':
                return this.firstFigure * this.secondFigure;
            case '/':
                return this.firstFigure / this.secondFigure;
            default:
                break;
        }
    }

    handleSymbol(symbol) {
        switch (this.currentState) {
            case this.INITSTATE:
                
                break;
            case this.FIRSTFIGURESTATE:
                if(this.isOperator(symbol)){
                    this.operator = symbol;
                    this.setState({ display: this.state.display + symbol });
                    this.currentState = this.SECONDFIGURESTATE;
                }
                break;
            case this.SECONDFIGURESTATE:
                if(symbol === '=') {
                    this.result = this.resolve();
                    this.setState({ display: this.state.display +'='+ this.result });
                    this.currentState = this.RESULTSTATE;
                }
                break;
            case this.RESULTSTATE:
                if(this.isOperator(symbol)){
                    this.firstFigure = this.result;
                    this.result = 0;
                    this.secondFigure = 0;
                    this.operator = symbol;
                    this.setState({ display: this.firstFigure + this.operator});
                    this.currentState = this.SECONDFIGURESTATE;
                    
                }
                break;
        
            default:
                break;
        }
    }

    handleClick(input) {
        // this.setState({ display: this.state.display + input })
        if (typeof input === 'string') {
            this.handleSymbol(input)
        } else if (typeof input === 'number'){
            this.handleNumber(input)
        }
        console.log(this.state.display);
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
        return (
            <div>
            <Display content={this.state.display} ></Display>
            <Keyboard signal={(input)=>{this.handleClick(input)}}></Keyboard>
            </div>
        );
    }
}

MyCalculator.propTypes = {

};

export default MyCalculator;
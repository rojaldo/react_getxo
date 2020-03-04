import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';

class Heroes extends Component {
    constructor(props) {
        super(props);
        this.state = {heroes: ['superman', 'batman']};
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

    addHero(){
        this.setState({heroes: [...this.state.heroes, 'Robin']})
    }

    render() {
        
        const listHeroes = 
        this.state.heroes.map((hero, i) => <li key={i}>{hero}</li>);
        return (
            <div>
            <Button variant="outline-success" size="lg" onClick={()=>{this.addHero()}}>Add hero</Button>
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
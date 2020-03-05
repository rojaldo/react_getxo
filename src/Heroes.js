import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

class Heroes extends Component {
    constructor(props) {
        super(props);
        this.state = { heroes: ['superman', 'batman'], heroName: '' };
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

    addHero() {
        this.setState({ heroes: [...this.state.heroes, this.state.heroName] })
    }

    handleChange(event){
        this.setState({heroName: event.target.value})
    }

    render() {

        const listHeroes =
            this.state.heroes.map((hero, i) => <li key={i} className="list-group-item">{hero}</li>);
        return (

            <Container >
                
                <span className="label m-2">Hero Name</span>
                <input type="text" name="" id="input" className="form-control m-2" value={this.state.heroName} required="required" pattern="" title="" onChange={(event)=>{this.handleChange(event)}}/>
                
                <Button className="m-2" variant="outline-success" size="lg" onClick={() => { this.addHero() }}>Add hero</Button>
                
                <ul class="list-group m-2">
                {listHeroes}
                </ul>
                
            </Container>
        );
    }
}

Heroes.propTypes = {

};

export default Heroes;
import React, { Component } from 'react';
import './Heroes.css'
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Hero from '../../models/Hero';

class Heroes extends Component {
    constructor(props) {
        super(props);
        this.state = { heroes: [
            new Hero('superman','Man of steel'),
            new Hero('batman', 'Dark knight')], newHero: new Hero(), 
            showField: 'alert alert-danger alert-dismissible fade show' };
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
        this.setState({ heroes: [...this.state.heroes, {...this.state.newHero}] })
    }

    handleChange(event){
        console.log(event.target.name)
        if(event.target.name === 'description'){
            console.log('evaluate:')
            if(event.target.valid){
                this.setState({showField: 'alert alert-danger alert-dismissible fade'})
            }else {
                this.setState({showField: 'alert alert-danger alert-dismissible fade show'})
            }
        }

        let tempHero = this.state.newHero;
        tempHero[event.target.name] = event.target.value;
        this.setState({newHero: tempHero})
        // if(event.target.name === 'name'){
        //     tempHero.name = event.target.value;
        //     this.setState({newHero: tempHero})
        // }else if(event.target.name === 'description'){
        //     tempHero.description = event.target.value;
        //     this.setState({newHero: tempHero})
        // }        
    }

    render() {

        const listHeroes =
    this.state.heroes.map((hero, i) => <li key={i} className="list-group-item"><b>{hero.name}</b><br></br>{hero.description}</li>);
        return (

            <Container >
                
                <span className="label m-2">Hero Name</span>
                <input type="text" name="name1" id="input" className="form-control m-2" value={this.state.newHero.name} required="required"  title="" onChange={(event)=>{this.handleChange(event)}}/>
                <span className="label m-2">Hero Description</span>
                <input type="number" name="description" id="input" className="form-control m-2" value={this.state.newHero.description} required="required" pattern="\d{5}" title="" onChange={(event)=>{this.handleChange(event)}}/>
                <div className={this.state.showField} role="alert">
                  <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                  <strong>a ver si pongo un texto</strong> 
                </div>
                
                <script>
                  $(".alert").alert();
                </script>
                <Button className="m-2" variant="outline-success" size="lg" onClick={() => { this.addHero() }}>Add hero</Button>
                
                <ul className="list-group m-2">
                {listHeroes}
                </ul>
                
            </Container>
        );
    }
}

Heroes.propTypes = {

};

export default Heroes;
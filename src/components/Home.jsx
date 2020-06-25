import React from 'react';
import "../assets/core.css";

class Home extends React.Component {
    constructor(props){
        super(props)
        this.saludo = "hola munbdo";
    }
    render(){
        return (<h1>{this.saludo}</h1>);
    }
}

export default Home;

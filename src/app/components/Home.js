import React from "react";

export class Home extends React.Component {

    constructor(props){
        super();
        this.state = {
            age: props.initAge,
            status: 0
        };
        setTimeout(() => {
            this.setState({
                status: 1
            });
        }, 3000);
    }

    onMakeOlder() {
        this.setState({
            age: this.state.age + 1
        });
    }

    render() {
        return (
            <div>
                <p>In a new Component!</p>
                <p>Name   : {this.props.name}</p>
                <p>Age    : {this.state.age}</p>
                <p>Status : {this.state.status}</p>
                <br/>
                <button onClick={ this.onMakeOlder.bind(this) } className="btn btn-primary">Make older!</button>
                <br/>
                <button onClick={ this.props.greet } className="btn btn-primary">Greet</button>
            </div>
        );
    }
}

Home.propTypes = {
    name: React.PropTypes.string,
    age: React.PropTypes.number,
    greet: React.PropTypes.func,
};
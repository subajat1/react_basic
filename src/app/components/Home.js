import React from "react";

export class Home extends React.Component {

    constructor(props){
        super();
        this.state = {
            age: props.initAge,
            status: 0,
            homeLink: props.initialLinkName
        };
        setTimeout(() => {
            this.setState({
                status: 1
            });
        }, 3000);
        console.log("Constructor");
    }

    componentWillMount() {
        console.log("Component will mount");
    }

    componentDidMount() {
        console.log("Component did mount!");
    }

    componentWillReceiveProps(nextProps) {
        console.log("Component will receive props", nextProps);
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("Should Component update", nextProps, nextState);
        // if (nextState.status === 1) {
        //     return false;
        // }
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log("Component will update", nextProps, nextState);
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("Component did update", prevProps, prevState);
    }

    componentWillUnmount() {
        console.log("Component will unmount");
    }

    onMakeOlder() {
        this.setState({
            age: this.state.age + 1
        });
    }

    onChangeLink() {
        this.props.changeLink(this.state.homeLink);
    }

    onHandleChange(event) {
        this.setState({
            homeLink: event.target.value
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
                <br/>
                <input 
                    onChange={(event) => this.onHandleChange(event)} 
                    type="text" 
                    value={this.state.homeLink} >
                </input>
                <button onClick={ this.onChangeLink.bind(this) } className="btn btn-primary">Change head</button>
            </div>
        );
    }
}

Home.propTypes = {
    name: React.PropTypes.string,
    age: React.PropTypes.number,
    greet: React.PropTypes.func,
    initialLinkName: React.PropTypes.string
};
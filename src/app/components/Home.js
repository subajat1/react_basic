import React from "react";

export class Home extends React.Component {
    render() {
        return (
            <div>
                <p>In a new Component!</p>
                <p>Name : {this.props.name}</p>
                <div>
                    <h4>Hobbies</h4>
                    <ul>
                        { this.props.user.hobbies.map((hobby, i) => <li key={i}>{hobby}</li>) }
                    </ul>
                </div>
                <hr/>
                {this.UNSAFE_componentWillMount.props.children}
            </div>
        );
    }
}

Home.propTypes = {
    name: React.PropTypes.string,
    age: React.PropTypes.number,
    user: React.PropTypes.object,
    children: React.PropTypes.element.isRequired
};
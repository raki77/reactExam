import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <div>
                {this.props.match.params.username} 의 소개
            </div>
        );
    }
}
export default About;
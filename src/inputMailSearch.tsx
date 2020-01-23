import React from 'react'
import { Component } from 'react';

export class InputEmail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: ''
        }
    }

    render() {
        return (
            <input type='search'/>
        );
    }
}
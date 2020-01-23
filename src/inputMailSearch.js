import React from 'react'
import { Component } from 'react';

export class InputEmail extends Component {
    constructor() {
        super();
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
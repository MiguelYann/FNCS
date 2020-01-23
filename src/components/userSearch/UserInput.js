import React, { Component } from "react";
import DisplaySearch from "../displayListsearch/DisplaySearch";
import './UserInput.css';
import requestGetGare from '../../script';

export default class UserInput extends Component {

  constructor() {
    super();
    this.state = {
      datas: [],
      search: ''
    }
  }

  componentDidUpdate() {
    requestGetGare(this.state.search)
      .then(dataFetch => this.setState({ datas: dataFetch }));

  }

  render() {
    return (
      <div>
        <div className='main'>
          <div className="form-group has-search">
            <span className="fa fa-search form-control-feedback"></span>
            <input type="search" class="form-control" placeholder="Entrer votre ville"
              onChange={event => this.setState({ search: event.target.value })}
            />
          </div>
          <DisplaySearch datas={this.state.datas} />

        </div>
      </div>
    );
  }
}
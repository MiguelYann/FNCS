import React, {Component} from "react";
import PropTypes from "prop-types";
import md5 from "js-md5";
import { InputEmail } from "./inputMailSearch";
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import Home from "./components/home/Home.component";
import Contact from "./components/contact/Contact.component";

export default class UserPanel extends Component<any, any>{

    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render () {
      return (
          <Router>

          <div>
          <InputEmail />
            <p>{this.props.nom}</p>
            <p>{this.props.prenom}</p>
            <p>{this.props.email}</p>
            <img
                src={"https://www.gravatar.com/avatar/" + md5(this.props.email)}
                alt="img"
            />
        </div>
              <Route path={'/home'} component={Home} />
              <Route exact path={'/contact'} component={Contact} />
              <Link to={`/contact`}>Contact</Link>
              <br/>
              <Link to={`/home`}>Home </Link>

          </Router>
    );
}}

// export default function UserPanel({nom, prenom,email}) {

//         return React.createElement('div',{}, null,
//         React.createElement('p',  {style: { color: 'black'}}, 'First Name: '+ nom),
//         React.createElement('p',  {style: { color: 'red'}}, 'Last Name: '+ prenom),
//         React.createElement('p',  {style: { color: 'brown'}}, 'Email: '+ email),
//         React.createElement('img',  { src :'https://www.gravatar.com/avatar/'+md5(email) }, null),
//         );
//     }

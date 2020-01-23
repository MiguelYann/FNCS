import React, {Component} from "react";
import PropTypes from "prop-types";
import md5 from "js-md5";
import { InputEmail } from "./inputMailSearch";

export default class UserPanel extends Component<any, any>{

    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render () {
      return ( <div>
        <InputEmail />
            <p>{this.props.nom}</p>
            <p>{this.props.prenom}</p>
            <p>{this.props.email}</p>
            <img
                src={"https://www.gravatar.com/avatar/" + md5(this.props.email)}
                alt="img"
            />
        </div>
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

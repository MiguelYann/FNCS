import React from "react";
import PropTypes from "prop-types";
import md5 from "js-md5";

UserPanel.propTypes = {
    nom: PropTypes.string.isRequired,
    prenom: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired
};

UserPanel.defaultProps = {
    nom: "Miguel",
    prenom: "Yann",
    email: "baptiste.lecocq@gmail"
};

export default function UserPanel(props) {
    return (
        <div>
            <p>{props.nom}</p>
            <p>{props.prenom}</p>
            <p>{props.email}</p>
            <img
                src={"https://www.gravatar.com/avatar/" + md5(props.email)}
                alt="img"
            />
        </div>
    );
}

// export default function UserPanel({nom, prenom,email}) {

//         return React.createElement('div',{}, null,
//         React.createElement('p',  {style: { color: 'black'}}, 'First Name: '+ nom),
//         React.createElement('p',  {style: { color: 'red'}}, 'Last Name: '+ prenom),
//         React.createElement('p',  {style: { color: 'brown'}}, 'Email: '+ email),
//         React.createElement('img',  { src :'https://www.gravatar.com/avatar/'+md5(email) }, null),
//         );
//     }

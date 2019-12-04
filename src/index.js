import React from 'react'
import ReactDOM from 'react-dom'
import  UserPanel  from './UserPanel';

ReactDOM.render(React.createElement(UserPanel, {
    nom:'miguel',
    prenom:'yann',
    email:'tsambamiguelito@gmail.com'
}),document.getElementById('root'));

    

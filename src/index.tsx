import React from "react";
import ReactDOM from "react-dom";
import UserPanel from "./UserPanel";
import UserInput from "./components/userSearch/UserInput";

// ReactDOM.render(React.createElement(UserPanel, {
//     nom:'miguel',
//     prenom:'yann',
//     email:'baptiste.lecocq@gmail.com'
// }),document.getElementById('root'));

export default function App() {
  return (
    <UserPanel nom="miguel" prenom="yann" email="tsambamiguelito@gmail.com" />

  );
}



ReactDOM.render([<App />, <UserInput />], document.getElementById("root"));

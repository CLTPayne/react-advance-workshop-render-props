import React from "react";
import ReactDOM from "react-dom";
import Fetch from "./fetch";
import "./styles.css";

const App = () => {
  return (
    <Fetch
      url="https://jsonplaceholder.typicode.com/users"
      render={({ loading, data, error }) => {
        if (loading) return <div>Loading...</div>;
        if (data) {
          return (
            <ul>
              {data.map(user => (
                <li key={user.id}>
                  {user.name} = {user.email}
                </li>
              ))}
            </ul>
          );
        }
        if (error)
          return "Woops, something went wrong. Try and refresh the page.";
        return null;
      }}
    />
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

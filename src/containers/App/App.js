import React from 'react';
import './App.css';
import Layout from "../../components/Layout/Layout";
import {Route, Switch} from "react-router-dom";
import MainPage from "../MainPage/MainPage";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={MainPage} />
      </Switch>
    </Layout>
  );
}

export default App;

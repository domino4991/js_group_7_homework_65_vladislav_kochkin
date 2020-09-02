import React from 'react';
import './App.css';
import Layout from "../../components/Layout/Layout";
import {Route, Switch} from "react-router-dom";
import MainPage from "../MainPage/MainPage";
import AdminPage from "../AdminPage/AdminPage";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/pages/admin" component={AdminPage} />
        <Route path="/pages/:id" component={MainPage} />
      </Switch>
    </Layout>
  );
}

export default App;

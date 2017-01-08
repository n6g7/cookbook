import React from 'react';
import { connect } from 'react-redux';

import Recipe from './Recipe';
import './App.styl';

class App extends React.PureComponent {
  render() {
    return <div id="cookbook">
      <header>
        <h1>Cookbook</h1>
      </header>
      <section>
        <Recipe/>
        <Recipe/>
        <Recipe/>
        <Recipe/>
        <Recipe/>
        <Recipe/>
      </section>
    </div>;
  }
}

App.propTypes = {};

export default App;

const mapStateToProps = () => ({});

const mapDispatchToProps = {};

export const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

import React from 'react';
import { connect } from 'react-redux';

import { homepage, version } from '../../package.json';
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
      <footer>
        <a href={homepage} target="blank">
          v{ version }
        </a>
      </footer>
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

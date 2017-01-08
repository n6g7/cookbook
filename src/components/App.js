import React from 'react';
import { connect } from 'react-redux';

import { homepage, version } from '../../package.json';
import Recipe from './Recipe';
import './App.styl';

import cookbook from '../../cookbook.yml';

class App extends React.PureComponent {
  render() {
    return <div id="cookbook">
      <header>
        <h1>Cookbook</h1>
      </header>
      <section>
        { cookbook.recipes.map(recipe =>
          <Recipe
            image={recipe.image}
            name={recipe.name}
          />
        )}
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

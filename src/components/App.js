import React from 'react';
import { connect } from 'react-redux';

import { homepage, version } from '../../package.json';
import Basket from './Basket';
import RecipeList from './RecipeList';
import '../style/App.styl';

import cookbook from '../../cookbook.yml';

class App extends React.PureComponent {
  render() {
    return <div id="cookbook">
      <main>
        <Basket />
        <RecipeList recipes={cookbook.recipes} />
      </main>
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

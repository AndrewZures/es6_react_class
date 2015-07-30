const _              = require('lodash');
const React          = require('react');
const preload        = require('./netflix');
const MovieContainer = require('./MovieContainer');

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      results: _.clone(preload.Search)
    }
  }

  render() {
    return (
      <div className="app-container">
        <div className="movies-list">
          { this.state.results.map( el => {
              return(
                <MovieContainer
                  id={ el.imdbID }
                  key={ el.imdbID }
                />
              );
            })
          }
        </div>
      </div>
    );
  }
}

module.exports = App

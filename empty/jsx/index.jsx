const _               = require('lodash');
const React           = require('react');
const OMDB            = require('omdb-client');

const Preload         = require('./netflix');
const Header          = require('./Header');
const MovieContainer  = require('./MovieContainer');
const MovieTileLayout = require('./MovieTileLayout');
const MovieListLayout = require('./MovieListLayout');

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      results: _.clone(Preload.Search),
      layout: 'tile',
      queryTerm: ''
    }
  }

  changeLayout(layout) {
    // this.setState({layout: layout });
    this.setState({layout}); //equivalent to above, yay es6!!!
  }

  chooseLayout(layout){
    //power of using higher level functionality, can pass down layout!!!
    return layout === 'tile' ? MovieTileLayout : MovieListLayout
  }

  search(term) {
    this.setState({ queryTerm: term });
    OMDB.search({ query: term }, (err, data) => { this .setState({ results: data.Search }) });
  }

  render() {
    let layout = this.chooseLayout(this.state.layout);

    return (
      <div className="app-container">
        <Header
          layout={ this.state.layout }
          changeLayout={ this.changeLayout.bind(this) }
          queryTerm={ this.state.queryTerm }
          search={ this.search.bind(this) }
        />
        <div className="movies-list">
          { this.state.results.map( el => {
              return(
                <MovieContainer
                  id={ el.imdbID }
                  key={ el.imdbID }
                  layout={ layout }
                />
              );
            })
          }
        </div>
      </div>
    );
  }
}

module.exports = App;

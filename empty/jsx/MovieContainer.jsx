const React = require('react');
const omdb = require('omdb-client');

class MovieContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = { movie: {} };
  }

  componentDidMount() {
    omdb.get({
      id: this.props.id
    }, (err, data) => { this.setState({ movie: data }); })
  }

  render() {
    return(
      <this.props.layout
        {...this.state.movie }
      />
    );
  }
}

module.exports = MovieContainer;

// process
// 1. getInitialState or constructor
// 2. componentWillMount
// 3. componentDidMount --> ajax calls
// 4. componentWillUnmount --> cleanup
//
// calling setState notifies react that something has changed
// if direct this.state.movie = something, no notification

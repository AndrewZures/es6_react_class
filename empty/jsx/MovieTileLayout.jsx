const React = require('react');
const RatingStars = require('./RatingStars');

class MovieTileLayout extends React.Component {

  getImage(){
    if(this.props.Poster && this.props.Poster !== 'N/A'){
      return this.props.Poster
    } else {
      return `public/img/fake${Math.floor(Math.random() * 5) + 1}.jpg`;
    }
  }

  render() {
    const img = this.getImage();
    return(
      <div className='movie-tile'>
        <div className='movie-tile__img-container'>
          <div
            className='movie-tile__img'
            style={{ backgroundImage: `url(${img})` }}
            >
          </div>
        </div>
        <div className="movie-tile__info">
          <h1 className="movie-tile__title">
            {this.props.Title}
          </h1>
          <h2 className="movie-tile__year">
            { this.props.Year }
          </h2>
          <div className="movie-tile__stars">
            <RatingStars
              max={10}
              score= {this.props.imdbRating }
            />
          </div>
        </div>
      </div>
    );
  }
}

module.exports = MovieTileLayout;

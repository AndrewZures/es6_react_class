const React = require('react');

class Header extends React.Component {

  handleLayoutEvent(e) {
    this.props.changeLayout(e.target.value);
  }

  // note the eplicit bind on for the event handler
  // the need to bind to Header because when initially evaluatted
  // the "this" will be on the window
  // look at pete hunt's code for work around
  //
  // handle event in the same component that the event is occuring
  // so don't let it trickle up to parent and handle it there

  render() {
    return(
      <header className="app-header">
        <div className="app-header__inner">
          <h1 className="app-header__title">Forwardflix</h1>
          <select onChange={ this.handleLayoutEvent.bind(this) }
                  value={this.props.layout}
                  className="app-header__display-select">
            <option value="tile">Tile</option>
            <option value="list">List</option>
          </select>
        </div>
    </header>
    );
  }
}

module.exports = Header;

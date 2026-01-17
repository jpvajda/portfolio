import React, { Component } from 'react';

class ModeToggle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dark: false
    };

    this.changeTheme = this.changeTheme.bind(this);
  }

  changeTheme() {
    this.setState({ dark: !this.state.dark });
  }

  render() {
    return (
      <div>
        <div className={'theme ' + (this.state.dark ? 'theme--dark' : 'theme--default')}>
          <button onClick={this.changeTheme}>Toggle Theme</button>
        </div>
      </div>
    );
  }
}

export default ModeToggle;
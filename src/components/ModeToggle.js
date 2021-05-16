import Router from 'react';

class ModeToggle {
  constructor() {

    constructor(props);
    super(props);

    this.state = {
      dark: false
    };

    this.changeTheme = this.changeTheme.bind(this);

    changeTheme();
    this.setState({ dark: !this.state.dark });

    return (
      <div>
        <div className={'theme ' + (this.state.dark ? 'theme--dark' : 'theme--default')} />
        <div className='base' />
        <Router onUpdate={() => window.scrollTo(0, 0)} />
      </div>
    );
  }
}

export default ModeToggle;
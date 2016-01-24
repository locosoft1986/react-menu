import React from 'react';
import ReactDom from 'react-dom';
import './menu.less';
import './index.less';
import Menu from './components/menu';
import MenuItem from './components/menuItem';

class Index extends React.Component {
  state = {
    showMenu: false
  };

  onMenuClicked = () => {
    this.setState({
      showMenu: !this.state.showMenu
    });
  };

  render() {
    return (
      <div className="demoMenu" onClick={this.onMenuClicked}>
        <span>Test Menu</span>
        <Menu show={this.state.showMenu} style={{top:0, left: 0, position:'relative'}}>
          <MenuItem>
            Menu1
          </MenuItem>
          <MenuItem>
            Menu1
          </MenuItem>
          <MenuItem>
            Menu1
          </MenuItem>
          <MenuItem>
            Menu1
          </MenuItem>
        </Menu>
      </div>

    );
  }
}

/**
 * (Re-)Render the application.
 */
function render() {
  ReactDom.render(
    <Index/>,
    document.getElementById('root')
  );
}

/**
 * Start the application.
 */
render();
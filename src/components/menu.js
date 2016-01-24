import React from 'react';

function getMenuClassName() {
  return 'menu ' + (!!this.props.show ? 'showMenu' : '');
}

export default class Menu extends React.Component {
  render() {
    return (
      <ul className={getMenuClassName.call(this)} style={this.props.style}>
        {this.props.children}
      </ul>
    );
  }
}
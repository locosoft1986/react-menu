import React from 'react';

export default class MenuItem extends React.Component {
  render() {
    return (
      <li className="menuItem">
        <button className="menuBtn">
          <span className="menuText">{this.props.children}</span>
        </button>
      </li>
    );
  }
}
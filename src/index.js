import React from 'react';
import ReactDom from 'react-dom';
import './index.less';

class Index extends React.Component {
  render() {
    return (
      <div>This is a react Component</div>
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
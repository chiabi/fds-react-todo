import React from 'react';

import {Redirect} from 'react-router-dom';

export default function (redirectpPath){
  return function (WrappedCompoennet) {
    return class extends React.Component {
      render() {
        if(localStorage.getItem('token')) { 
          return <WrappedCompoennet {...this.props}/>;
        } else {
          return <Redirect to={redirectpPath}/>;
        }
      }
    }
  }
}

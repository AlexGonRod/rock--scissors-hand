import React from 'react';
import { createBrowserHistory } from 'history';
const history = createBrowserHistory();

const NotFound = () => (
    
  <div>
    <h1>404 - Not Found!</h1>
    {history.push('/')}
  </div>
);

export default NotFound;
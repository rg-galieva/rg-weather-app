import React from 'react'
import browserHistory from '../../history'

const NoMatch = ({ location }) => (
    <div>
        <h3>Sorry, No match for <code>{location.pathname}</code></h3>
        <a className="is-emph" onClick={browserHistory.goBack}>Go Back</a>
    </div>
);

export default NoMatch
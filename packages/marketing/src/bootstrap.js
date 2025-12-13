import React from "react";
import ReactDOM from 'react-dom';
import App from './app';

// Mount function to start up the app

const mount = (el) => {
    ReactDOM.render(
        <App/>,
        el
    );
}


// If we are in dev and in isolation
//  call mount immediately

if (process.env.NODE_ENV === 'development') {
    const el = document.querySelector('#_marketing-dev-root');
    if (el) {
        mount(el);
    }

}

// we are running through container
// and we should export the mount function

export {mount};
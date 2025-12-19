import React from "react";
import ReactDOM from 'react-dom';
import { createMemoryHistory, createBrowserHistory } from 'history';
import App from './app';

// Mount function to start up the app

const mount = (el, { onNavigate, defaultHistory, initialPath, onSignIn }) => {
    const history = defaultHistory || createMemoryHistory({
        initialEntries: [initialPath]
    });
    if (onNavigate) {
        history.listen(onNavigate);
    }

    ReactDOM.render(
        <App onSignIn={onSignIn} history={history} />,
        el
    );

    return {
        onParentNavigate({ pathname: nextPathname }) {
            console.log(nextPathname);
            
            if(history.location.pathname !== nextPathname) {
                history.push(nextPathname);
            }
        }
    }
}


// If we are in dev and in isolation
//  call mount immediately

if (process.env.NODE_ENV === 'development') {
    const el = document.querySelector('#_auth-dev-root');
    if (el) {
        mount(el, {defaultHistory: createBrowserHistory()}); 
    }

}

// we are running through container
// and we should export the mount function

export { mount };
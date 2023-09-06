import { mount } from 'auth/AuthApp';
import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const AuthApp = ({ onSignIn }) => {
    const ref = useRef(null);
    const history = useHistory();


    useEffect(() => {
        const { onParentNavigate } = mount(ref.current, {
            initialPath: history.location.pathname,
            onNavigate: ({ pathname: nextPathname }) => {
                console.log(nextPathname);
                const { pathname } = history.location;

                if (pathname !== nextPathname) {
                    history.push(nextPathname);
                }
            },
            onSignIn,
        });

        const cb = history.listen(onParentNavigate);

        return () => cb();
    }, []);

    return (
        <div ref={ref} />
    )
};

export default AuthApp;
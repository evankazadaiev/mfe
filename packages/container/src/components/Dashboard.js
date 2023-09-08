import { mount } from 'auth/AuthApp';
import React, { useRef, useEffect } from 'react';

const AuthApp = () => {
    const ref = useRef(null);


    useEffect(() => {
        mount(ref.current);
    }, []);

    return (
        <div ref={ref} />
    )
};

export default AuthApp;
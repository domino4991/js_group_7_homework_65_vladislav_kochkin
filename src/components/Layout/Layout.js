import React from 'react';

const Layout = props => {
    return (
        <>
            <header>Header</header>
            <main className="Content">
                {props.children}
            </main>
        </>
    );
};

export default Layout;
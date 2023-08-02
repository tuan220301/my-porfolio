import React, { useEffect, useState } from 'react';

import { Link } from 'gatsby';

const NavbarComponent = () => {
    const isBrowser = typeof window !== "undefined";

    return (
        <nav>
            <>
                <Link to='/' activeClassName='active'>
                    Home
                </Link>
                <Link to='/Work' activeClassName='active'>
                    Work
                </Link>
                <Link to='/Contact' activeClassName='active'>
                    Contact
                </Link>
            </>
        </nav>

    );
};

export default NavbarComponent;

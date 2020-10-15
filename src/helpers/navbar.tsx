import Navbar from '../components/navbar/navbar.component';
import React, {ReactElement} from 'react';

export const renderNavbar = (props): ReactElement =>
    <Navbar {...props} />;

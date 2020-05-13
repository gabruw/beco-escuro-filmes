//#region Imports

import React, { Fragment } from 'react';

import NavBar from '../../components/NavBar/index';
import Footer from '../../components/Footer/index';
import MoviePresentation from '../../components/MoviePresentation/index';

//#endregion

const Home = () => {
    return (
        <Fragment>
            <NavBar />
            <MoviePresentation />
            <Footer />
        </Fragment>
    );
};

export default Home;

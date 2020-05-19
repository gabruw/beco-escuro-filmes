//#region Imports

import React, { Fragment } from 'react';
import { MovieContextProvider } from '../../store/movies';

import NavBar from '../../components/NavBar/index';
import Footer from '../../components/Footer/index';
import MoviePresentation from '../../components/MoviePresentation/index';

//#endregion

const Home = () => {
    return (
        <Fragment>
            <NavBar />
            <MovieContextProvider>
                <MoviePresentation />
            </MovieContextProvider>
            <Footer />
        </Fragment>
    );
};

export default Home;

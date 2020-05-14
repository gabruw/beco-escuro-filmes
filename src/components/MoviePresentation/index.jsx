//#region Imports

import React, { Fragment, useRef, useState } from 'react';
import Grid from '@material-ui/core/Grid';

import MovieList from './../MovieList/index';
import SearchField from '../SearchField/index';
import ModalStyled from './../../containers/ModalStyled/index';

import API from './../../services/api';
import STATUS from './../../library/status';
import { ENDPOINTS, blankEncodeToUrl } from './../../library/endpoints';

import useStyles from './styles';

//#endregion

const MoviePresentation = () => {
    const styles = useStyles();

    const handleModalSelectMovies = useRef();
    const [movieList, setMovieList] = useState([]);

    const getMovies = async (title) => {
        title = blankEncodeToUrl(title);

        const {
            status,
            data: { results, total_results },
        } = await API.get(ENDPOINTS.TMDB_MOVIES_BY_TITLE(title));

        console.log('results', results);
        console.log('total_results', total_results);

        if (STATUS.OK(status)) {
            if (total_results > 0) {
                setMovieList(results);
                handleModalSelectMovies.current.handleModal();
            }

            // if (total_results === 1) {
            //     setMovieList(getOneOf(results[0].id));
            // } else if (total_results > 1) {
            //     handleModalSelectMovies.current.handleModal();
            // }
        }

        return results;
    };

    const getOneOf = async (id) => {
        const { data } = await API.get(ENDPOINTS.TMDB_MOVIES_BY_ID(id));
        const object = {
            id: data.id,
            genres: data.genres,
            original_title: data.original_title,
            overview: data.overview,
            poster_path: data.poster_path,
            release_date: data.release_date,
            runtime: data.runtime,
            title: data.title,
            vote_average: data.vote_average,
        };

        return object;
    };

    console.log('movieList', movieList);
    return (
        <Fragment>
            <Grid container className={styles.background}>
                <Grid item xs={12} className={styles.marginTop}>
                    <div className={styles.alignCenter}>
                        <SearchField searchIn={getMovies} />
                    </div>
                </Grid>
            </Grid>

            <ModalStyled ref={handleModalSelectMovies} body={<MovieList list={movieList} />} />
        </Fragment>
    );
};

export default MoviePresentation;

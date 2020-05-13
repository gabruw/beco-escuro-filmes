//#region Imports

import React, { Fragment } from 'react';

import Grid from '@material-ui/core/Grid';
import SearchField from '../SearchField/index';

import API from './../../services/api';
import STATUS from './../../library/status';
import ENDPOINTS from './../../library/endpoints';

import useStyles from './styles';

//#endregion

const MoviePresentation = () => {
    const styles = useStyles();

    const getMovie = async (title) => {
        const regex = new RegExp(' ', 'g');
        title = title.replace(regex, '%20').trim();

        const {
            status,
            data: { results, total_results },
        } = await API.get(ENDPOINTS.TMDB_MOVIES_BY_TITLE(title));

        if (STATUS.OK(status) && total_results > 0) {
            const { data } = await API.get(ENDPOINTS.TMDB_MOVIES_BY_ID(results[0].id));
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

            console.log(object);
        }

        return '';
    };

    return (
        <Fragment>
            <Grid container className={styles.background}>
                <Grid item xs={12} className={styles.marginTop}>
                    <div className={styles.alignCenter}>
                        <SearchField searchIn={getMovie} />
                    </div>
                </Grid>
            </Grid>
        </Fragment>
    );
};

export default MoviePresentation;

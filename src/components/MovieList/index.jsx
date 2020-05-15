//#region Imports

import React, { Fragment, useReducer } from 'react';
import { MOVIE_INITIAL_STATE, MOVIE_REDUCER, MOVIE_CREATORS } from '../../store/reducer/movies';

import Grid from '@material-ui/core/Grid';
import Checkbox from '@material-ui/core/Checkbox';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

import IMAGES from './../../library/images';
import useStyles from './styles';

//#endregion

const MovieList = ({ isSelectable = false, list }) => {
    const styles = useStyles();

    const [movieState, movieDispatch] = useReducer(MOVIE_REDUCER, MOVIE_INITIAL_STATE);

    const addSelectedMovie = (idMovie) => {
        idMovie = Number(idMovie);
        const selected = movieState.checkedMovies.filter((value) => value.id === idMovie);

        switch (selected.length) {
            case 0:
                const getMovie = list.filter((value) => value.id === idMovie);
                movieDispatch(MOVIE_CREATORS.addCheckedMovie(getMovie));

                break;
            case 1:
                movieDispatch(MOVIE_CREATORS.removeCheckedMovie(idMovie));
                break;
            default:
                console.log('Erro: O filme selecionado estourou a lista.');
                break;
        }
    };

    return (
        <Fragment>
            <Grid container spacing={3}>
                {list &&
                    list.map((value, index) => (
                        <Grid item md={4} xs={12} key={index} className={styles.alignCenter}>
                            <div>
                                <label htmlFor={`${index}Check`} className={styles.cursor}>
                                    {isSelectable && (
                                        <div className={styles.checkboxContainer}>
                                            <Checkbox
                                                size={'medium'}
                                                value={value.id}
                                                id={`${index}Check`}
                                                icon={<CheckCircleOutlineIcon className={styles.checkbox} />}
                                                checkedIcon={<CheckCircleIcon className={styles.checkbox} />}
                                                onChange={(e) => addSelectedMovie(e.target.value)}
                                            />
                                        </div>
                                    )}

                                    <img
                                        className={styles.img}
                                        alt={value.title}
                                        title={value.title}
                                        src={
                                            value.poster_path
                                                ? IMAGES.TMDB_MOVIES_LAYER(value.poster_path)
                                                : IMAGES.DAFAULT()
                                        }
                                    />
                                </label>
                                <br />
                                <Grid item xs={12}>
                                    <span className={styles.title}>{value.title}</span>
                                    <br />
                                    <span className={styles.originalTitle}>{value.original_title}</span>
                                </Grid>
                            </div>
                        </Grid>
                    ))}
            </Grid>
        </Fragment>
    );
};

export default MovieList;

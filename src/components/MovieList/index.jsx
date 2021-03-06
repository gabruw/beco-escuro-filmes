//#region Imports

import React, { Fragment, useContext } from 'react';
import MovieContext from '../../store/movies';

import Grid from '@material-ui/core/Grid';
import Checkbox from '@material-ui/core/Checkbox';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

import IMAGES from './../../library/images';
import useStyles from './styles';

//#endregion

const MovieList = ({ isSelectable = false, list }) => {
    const styles = useStyles();
    const { state, addCheckedMovie, removeCheckedMovie } = useContext(MovieContext);

    const manageSelectedMovies = (idMovie) => {
        const selected = state.checkedMovies.filter((value) => value.id === idMovie);

        switch (selected.length) {
            case 0:
                const movie = list.filter((value) => value.id === idMovie);
                addCheckedMovie(movie);

                break;
            case 1:
                removeCheckedMovie(idMovie);
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
                                                onChange={(e) => manageSelectedMovies(Number(e.target.value))}
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

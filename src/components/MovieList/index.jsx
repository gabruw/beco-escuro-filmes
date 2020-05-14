//#region Imports

import React, { Fragment } from 'react';

import Grid from '@material-ui/core/Grid';
import IMAGES from './../../library/images';

import useStyles from './styles';

//#endregion

const MovieList = ({ list }) => {
    const styles = useStyles();

    list = list.concat(list);

    return (
        <Fragment>
            <Grid container spacing={3}>
                {list &&
                    list.map((value, index) => (
                        <Grid item md={4} xs={12} key={index} className={styles.alignCenter}>
                            <div>
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
                                <br />
                                <div>
                                    <span className={styles.title}>{value.title}</span>
                                    <br />
                                    <span className={styles.originalTitle}>{value.original_title}</span>
                                </div>
                            </div>
                        </Grid>
                    ))}
            </Grid>
        </Fragment>
    );
};

export default MovieList;

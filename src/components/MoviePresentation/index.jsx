//#region Imports

import React, { Fragment } from 'react';

import Grid from '@material-ui/core/Grid';
import SearchField from '../SearchField/index';

import useStyles from './styles';

//#endregion

const MoviePresentation = () => {
    const styles = useStyles();

    return (
        <Fragment>
            <Grid container className={styles.background}>
                <Grid xs={12} className={styles.marginTop}>
                    <div className={styles.alignCenter}>
                        <SearchField />
                    </div>
                </Grid>
            </Grid>
        </Fragment>
    );
};

export default MoviePresentation;

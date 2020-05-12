//#region Imports

import React, { Fragment } from 'react';

import Paper from '@material-ui/core/Paper';
import useStyles from './styles';

//#endregion

const Footer = () => {
    const styles = useStyles();

    return (
        <Fragment>
            <Paper elevation={0} className={styles.background} />
        </Fragment>
    );
};

export default Footer;

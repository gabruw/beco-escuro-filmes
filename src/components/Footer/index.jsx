//#region Imports

import React, { Fragment } from 'react';

import Paper from '@material-ui/core/Paper';
import { createStyles, makeStyles } from '@material-ui/core/styles';

import { styles as StyleComponent } from './styles';

//#endregion

const Footer = () => {
    const styles = makeStyles(() => createStyles(StyleComponent()));

    return (
        <Fragment>
            <Paper elevation={0} className={styles().background} />
        </Fragment>
    );
};

export default Footer;

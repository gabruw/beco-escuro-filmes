//#region Imports

import React, { Fragment } from 'react';

import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';

import AssertButton from '../AssertButton/index';
import useStyles from './styles';

//#endregion

const NavBar = () => {
    const styles = useStyles();

    return (
        <Fragment>
            <AppBar className={styles.background} position={'static'}>
                <Toolbar>
                    <IconButton className={styles.btnMargin} edge='start' aria-label='menu'>
                        <MenuIcon className={styles.icon} />
                    </IconButton>

                    <Grid container>
                        <Grid item xs={10}></Grid>
                        <Grid item xs={2} className={styles.alignRight}>
                            <div className={styles.btnMargin}>
                                <AssertButton text={'Registrar'} />
                            </div>
                            <AssertButton isContained={false} isPrimaryOutlined={true} text={'Entrar'} />
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </Fragment>
    );
};

export default NavBar;

//#region Imports

import React, { Fragment } from 'react';

import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import { AppBar, Toolbar } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';

import AssertButton from '../AssertButton/index';
import { styles as StyleComponent } from './styles';

//#endregion

const NavBar = () => {
    const styles = makeStyles((theme) => createStyles(StyleComponent(theme)));

    return (
        <Fragment>
            <AppBar className={styles().background} position={'static'}>
                <Toolbar>
                    <IconButton className={styles().iconButton} edge='start' aria-label='menu'>
                        <MenuIcon className={styles().icon} />
                    </IconButton>

                    <div className={styles().rigthContent}>
                        <AssertButton text={'Registrar'} />
                        <AssertButton isContained={false} isPrimaryOutlined={true} text={'Entrar'} />
                    </div>
                </Toolbar>
            </AppBar>
        </Fragment>
    );
};

export default NavBar;

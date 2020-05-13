//#region Imports

import React, { Fragment } from 'react';

import Search from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';

import useStyles from './styles';

//#endregion

const SearchField = () => {
    const styles = useStyles();

    return (
        <Fragment>
            <TextField
                size={'small'}
                variant={'outlined'}
                placeholder={'Pesquisar'}
                className={styles.textField}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position='start'>
                            <Search className={styles.icon} />
                        </InputAdornment>
                    ),
                }}
            />
        </Fragment>
    );
};

export default SearchField;

//#region Imports

import React, { Fragment, useState } from 'react';

import Search from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import CircularProgress from '@material-ui/core/CircularProgress';

import EVENTS from './../../library/events';

import useStyles from './styles';

//#endregion

const SearchField = ({ searchIn }) => {
    const styles = useStyles();
    const [loading, setLoading] = useState(false);

    const search = async (value) => {
        setLoading(true);
        await searchIn(value);
        setLoading(false);
    };

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
                            {loading ? (
                                <CircularProgress className={styles.loading} size={20} />
                            ) : (
                                <Search className={styles.icon} />
                            )}
                        </InputAdornment>
                    ),
                }}
                onKeyUp={(e) => (EVENTS.ON_PRESS_ENTER(e) ? search(e.target.value) : null)}
            />
        </Fragment>
    );
};

export default SearchField;

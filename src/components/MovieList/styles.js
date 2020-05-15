//#region Imports

import { createStyles, makeStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';

import { ALIGN } from './../../assets/styles/align';

//#endregion

export const useStyles = () => {
    const styles = makeStyles(() =>
        createStyles({
            alignCenter: ALIGN.ALIGN_CENTER,
            cursor: { cursor: 'pointer' },
            img: {
                width: '200px',
                height: '300px',
            },
            title: {
                color: '#000',
                fontSize: '14px',
            },
            originalTitle: {
                color: '#000',
                fontSize: '10px',
            },
            checkboxContainer: {
                position: 'absolute',
                marginTop: '260px',
                marginLeft: '160px',
            },
            checkbox: {
                color: green[400],
            },
        })
    );

    return styles();
};

export default useStyles;

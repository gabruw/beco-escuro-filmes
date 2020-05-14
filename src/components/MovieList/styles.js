//#region Imports

import { createStyles, makeStyles } from '@material-ui/core/styles';
import { ALIGN } from './../../assets/styles/align';

//#endregion

export const useStyles = () => {
    const styles = makeStyles(() =>
        createStyles({
            alignCenter: ALIGN.ALIGN_CENTER,
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
        })
    );

    return styles();
};

export default useStyles;

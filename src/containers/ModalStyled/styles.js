//#region Imports

import { createStyles, makeStyles } from '@material-ui/core/styles';
import { ALIGN, MARGIN } from './../../assets/styles/align';

//#endregion

export const useStyles = () => {
    const styles = makeStyles((theme) =>
        createStyles({
            alignCenter: Object.assign({ marginTop: '35px' }, ALIGN.ALIGN_CENTER),
            btnMargin: {
                marginRight: theme.spacing(MARGIN.BUTTON),
            },
            paper: {
                backgroundColor: theme.palette.background.paper,
                border: '2px solid #000',
                boxShadow: theme.shadows[5],
                padding: theme.spacing(2, 4, 3),
            },
        })
    );

    return styles();
};

export default useStyles;

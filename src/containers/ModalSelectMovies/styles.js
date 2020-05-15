//#region Imports

import { createStyles, makeStyles } from '@material-ui/core/styles';

import { COLOR } from './../../assets/styles/color';
import { ALIGN, MARGIN } from '../../assets/styles/align';

//#endregion

export const useStyles = () => {
    const marginTop = { marginTop: '35px' };
    const styles = makeStyles((theme) =>
        createStyles({
            marginTop: marginTop,
            alignCenter: Object.assign(marginTop, ALIGN.ALIGN_CENTER),
            btnMargin: {
                marginRight: theme.spacing(MARGIN.BUTTON),
            },
            paper: {
                border: '2px solid #000',
                boxShadow: theme.shadows[5],
                padding: theme.spacing(2, 4, 3),
                backgroundColor: theme.palette.background.paper,
            },
            title: {
                fontSize: '30px',
                color: COLOR.SECONDARY,
                textTransform: 'uppercase',
            },
        })
    );

    return styles();
};

export default useStyles;

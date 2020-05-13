//#region Imports

import { createStyles, makeStyles } from '@material-ui/core/styles';

import { COLOR } from '../../assets/styles/color';
import { ALIGN, MARGIN } from '../../assets/styles/align';

//#endregion

export const useStyles = () => {
    const styles = makeStyles((theme) =>
        createStyles({
            background: {
                backgroundColor: COLOR.SECONDARY,
            },
            btnMargin: {
                marginRight: theme.spacing(MARGIN.BUTTON),
            },
            icon: {
                color: COLOR.WHITE,
            },
            alignRight: ALIGN.ALIGN_RIGHT,
        })
    );

    return styles();
};

export default useStyles;

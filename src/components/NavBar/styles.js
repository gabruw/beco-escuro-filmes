//#region Imports

import { createStyles, makeStyles } from '@material-ui/core/styles';

import { COLOR } from '../../assets/styles/color';
import { MARGIN } from '../../assets/styles/margin';

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
            alignRight: {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
            },
        })
    );

    return styles();
};

export default useStyles;

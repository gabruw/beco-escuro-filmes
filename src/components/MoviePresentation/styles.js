//#region Imports

import { createStyles, makeStyles } from '@material-ui/core/styles';

import { COLOR } from '../../assets/styles/color';
import { ALIGN } from '../../assets/styles/align';

//#endregion

export const useStyles = () => {
    const styles = makeStyles((theme) =>
        createStyles({
            alignCenter: ALIGN.ALIGN_CENTER,
            background: {
                backgroundColor: COLOR.LIGHT_GRAY,
                minHeight: '200px',
            },
            marginTop: {
                marginTop: theme.spacing(4),
            },
        })
    );

    return styles();
};

export default useStyles;

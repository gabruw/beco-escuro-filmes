//#region Imports

import { createStyles, makeStyles } from '@material-ui/core/styles';
import { COLOR } from '../../assets/styles/color';

//#endregion

export const useStyles = () => {
    const styles = makeStyles(() =>
        createStyles({
            background: {
                height: '300px',
                backgroundColor: COLOR.SECONDARY,
            },
        })
    );

    return styles();
};

export default useStyles;

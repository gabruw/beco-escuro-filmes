//#region Imports

import { createStyles, makeStyles } from '@material-ui/core/styles';
import { COLOR, SHADOW } from '../../assets/styles/color';

//#endregion

export const useStyles = (isPrimaryOutlined) => {
    const styles = makeStyles(() =>
        createStyles({
            contained: {
                color: COLOR.WHITE,
                backgroundColor: COLOR.PRIMARY,
                '&:hover': {
                    backgroundColor: SHADOW.PRIMARY,
                },
            },
            outlined: {
                color: isPrimaryOutlined ? COLOR.WHITE : COLOR.SECONDARY,
                border: `1px solid ${isPrimaryOutlined ? COLOR.PRIMARY : COLOR.SECONDARY}`,
            },
        })
    );

    return styles();
};

export default useStyles;

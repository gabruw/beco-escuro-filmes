//#region Imports

import { COLOR } from '../../assets/styles/color';

//#endregion

export const styles = (theme) => {
    return {
        background: {
            backgroundColor: COLOR.SECONDARY,
        },
        iconButton: {
            marginRight: theme.spacing(2),
        },
        icon: {
            color: COLOR.WHITE,
        },
        rigthContent: {
            position: 'relative',
        },
    };
};

export default styles;

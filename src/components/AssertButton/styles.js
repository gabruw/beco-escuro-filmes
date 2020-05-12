//#region Imports

import { COLOR, SHADOW } from '../../assets/styles/color';

//#endregion

export const styles = (isPrimaryOutlined) => {
    return {
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
    };
};

export default styles;

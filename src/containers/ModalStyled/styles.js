//#region Imports

import { createStyles, makeStyles } from '@material-ui/core/styles';

//#endregion

export const useStyles = () => {
    const styles = makeStyles(() => createStyles({}));

    return styles();
};

export default useStyles;

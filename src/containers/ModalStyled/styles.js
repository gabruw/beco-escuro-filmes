//#region Imports

import { createStyles, makeStyles } from '@material-ui/core/styles';

//#endregion

export const useStyles = () => {
    const styles = makeStyles((theme) =>
        createStyles({
            modal: {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
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

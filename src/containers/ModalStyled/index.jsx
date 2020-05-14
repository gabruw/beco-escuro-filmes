//#region Imports

import React, { Fragment, useState, forwardRef, useImperativeHandle } from 'react';

import Grid from '@material-ui/core/Grid';
import Fade from '@material-ui/core/Fade';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';

import AssertButton from '../../components/AssertButton/index';
import useStyles from './styles';

//#endregion

const ModalStyled = forwardRef((props, ref) => {
    const styles = useStyles();
    const [open, setOpen] = useState(false);

    useImperativeHandle(ref, () => ({
        handleModal() {
            setOpen(!open);
        },
    }));

    return (
        <Fragment>
            <Grid container direction='row' justify='center' alignItems='center'>
                <Modal
                    open={open}
                    className={styles.alignCenter}
                    onClose={() => ref.current.handleModal()}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 500,
                    }}
                    aria-labelledby={'transition-modal-title'}
                    aria-describedby={'transition-modal-description'}
                >
                    <Grid item md={5} xs={12}>
                        <Fade in={open}>
                            <div className={styles.paper}>
                                {props.body}

                                <Grid item xs={12} className={styles.alignCenter}>
                                    <div className={styles.btnMargin}>
                                        <AssertButton
                                            isContained={false}
                                            text={'Fechar'}
                                            onClick={() => ref.current.handleModal()}
                                        />
                                    </div>
                                    <AssertButton text={'Selecionar'} />
                                </Grid>
                            </div>
                        </Fade>
                    </Grid>
                </Modal>
            </Grid>
        </Fragment>
    );
});

export default ModalStyled;

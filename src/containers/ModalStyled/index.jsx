//#region Imports

import React, { Fragment, useState, forwardRef, useImperativeHandle } from 'react';

import Fade from '@material-ui/core/Fade';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';

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
            <Modal
                open={open}
                className={styles.modal}
                onClose={() => ref.current.handleModal()}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
                aria-labelledby={'transition-modal-title'}
                aria-describedby={'transition-modal-description'}
            >
                <Fade in={open}>
                    <div className={styles.paper}>
                        <h2 id='transition-modal-title'>Transition modal</h2>
                        <p id='transition-modal-description'>react-transition-group animates me.</p>
                    </div>
                </Fade>
            </Modal>
        </Fragment>
    );
});

export default ModalStyled;

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
                    <div>
                        <h2>Transition modal</h2>
                        <p>react-transition-group animates me.</p>
                    </div>
                </Fade>
            </Modal>
        </Fragment>
    );
});

export default ModalStyled;

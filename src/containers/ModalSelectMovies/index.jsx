//#region Imports

import React, { Fragment, useState, useContext, forwardRef, useImperativeHandle } from 'react';
import MoviesContext from './../../store/context/movies';

import Grid from '@material-ui/core/Grid';
import Fade from '@material-ui/core/Fade';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';

import MovieList from '../../components/MovieList/index';
import AssertButton from '../../components/AssertButton/index';

import TEXT from './../../library/text';
import TRANSITIONS from './../../library/transition';

import useStyles from './styles';

//#endregion

const ModalSelectMovies = forwardRef((props, ref) => {
    const styles = useStyles();

    const [open, setOpen] = useState(false);
    const moviesContext = useContext(MoviesContext);

    useImperativeHandle(ref, () => ({
        handleModal() {
            setOpen(!open);
        },
    }));

    const disableButton = moviesContext.checkedMovies.length < 1;
    return (
        <Fragment>
            <Grid container>
                <Modal
                    open={open}
                    closeAfterTransition
                    className={styles.alignCenter}
                    BackdropComponent={Backdrop}
                    BackdropProps={{ timeout: 500 }}
                    onClose={() => ref.current.handleModal()}
                    aria-labelledby={TRANSITIONS.MODAL_TITLE}
                    aria-describedby={TRANSITIONS.MODAL_DESCRIPTION}
                >
                    <Grid item md={5} xs={12}>
                        <Fade in={open}>
                            <div className={styles.paper}>
                                <Grid item xs={12} className={styles.alignCenter}>
                                    <span className={styles.title}>{TEXT.MODAL_TITLE_SELECT_MOVIES}</span>
                                </Grid>

                                <hr />

                                <div className={styles.marginTop}>
                                    <MovieList isSelectable={true} list={props.movieList} />
                                </div>

                                <Grid item xs={12} className={styles.alignCenter}>
                                    <div className={styles.btnMargin}>
                                        <AssertButton
                                            isContained={false}
                                            text={'Fechar'}
                                            onClick={() => ref.current.handleModal()}
                                        />
                                    </div>
                                    <AssertButton
                                        text={'Selecionar'}
                                        isDisabled={disableButton}
                                        onClick={() => ref.current.handleModal()}
                                    />
                                </Grid>
                            </div>
                        </Fade>
                    </Grid>
                </Modal>
            </Grid>
        </Fragment>
    );
});

export default ModalSelectMovies;

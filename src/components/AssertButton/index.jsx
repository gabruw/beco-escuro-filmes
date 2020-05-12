//#region Imports

import React, { Fragment } from 'react';

import Button from '@material-ui/core/Button';
import { createStyles, makeStyles } from '@material-ui/core/styles';

import { styles as StyleComponent } from './styles';

//#endregion

const AssertButton = ({
    isContained = true,
    isPrimaryOutlined = false,
    haveIcon = false,
    isDisabled = false,
    text = 'Sample Text',
}) => {
    const styles = makeStyles(() => createStyles(StyleComponent(isPrimaryOutlined)));

    const variant = isContained ? 'contained' : 'outlined';
    const className = isContained ? styles().contained : styles().outlined;
    return (
        <Fragment>
            <Button variant={variant} className={className} startIcon={haveIcon} disabled={isDisabled}>
                {text}
            </Button>
        </Fragment>
    );
};

export default AssertButton;

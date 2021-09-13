import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Typography } from '@material-ui/core';

export default function Loader() {
    return (
        <>
            <CircularProgress disableShrink />
            <Typography variant='h5'>Loading...</Typography>

        </>
    )
}

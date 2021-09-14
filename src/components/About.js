import React, { useEffect, useRef } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Typography } from '@material-ui/core';

export default function ScrollDialog({ open, handleClose, scroll }) {

    const descriptionElementRef = useRef(null);
    useEffect(() => {
        if (open) {
            const { current: descriptionElement } = descriptionElementRef;
            if (descriptionElement !== null) {
                descriptionElement.focus();
            }
        }
    }, [open]);

    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                scroll={scroll}
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
            >
                <DialogTitle id="scroll-dialog-title">About Spacestagram</DialogTitle>
                <DialogContent dividers={scroll === 'paper'}>
                    <DialogContentText
                        id="scroll-dialog-description"
                        ref={descriptionElementRef}
                        tabIndex={-1}
                    >
                        <Typography>
                            <strong>Spacestagram</strong> is a photo and video sharing social networking service created by Houssem Marzougui.
                            All media content is taken from NASA's free and public APIs.
                        </Typography>
                        <br />
                        <Typography>
                            NASA is the National Aeronautics and Space Administration of the U.S. federal government responsible for the civilian
                            space program, as well as aeronautics and space research. NASA's science is focused on better understanding Earth through
                            the Earth Observing System;advancing heliophysics through the efforts of the Science Mission Directorate's Heliophysics
                            Research Program; exploring bodies throughout the Solar System with advanced robotic spacecraft such as New Horizons;
                            and researching astrophysics topics, such as the Big Bang, through the Great Observatories and associated programs.
                        </Typography>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        <a href='https://www.nasa.gov/about/index.html' target='_blank' rel="noreferrer" style={{ textDecoration: 'none' }}>Learn more about Nasa</a>
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

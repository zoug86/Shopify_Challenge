import React, { useState } from 'react';
import { IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import FavoriteIcon from '@material-ui/icons/Favorite';

const useStyles = makeStyles((theme) => ({
    liker: {
        color: 'red'
    },
}));

const Liker = () => {
    const classes = useStyles();
    const [toggle, setToggle] = useState(false);
    //console.log(toggle);
    return (
        <IconButton aria-label="like" onClick={() => setToggle(!toggle)} >
            <FavoriteIcon className={toggle ? classes.liker : ''} />
        </IconButton>
    )
}

export default Liker;

import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import { Grid, IconButton } from '@material-ui/core';
import ShareIcon from '@material-ui/icons/Share';
import { FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon, LinkedinShareButton, LinkedinIcon } from "react-share";


const useStyles = makeStyles((theme) => ({
    socials: {
        padding: theme.spacing(1),
        background: '#363233',
        display: 'flex',
    },
    social_item: {
        padding: 5,
    },
    socialMediaIcon: {
        borderRadius: '50%',
    }

}));

export default function Popup({ image }) {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <div>
            {/* <Button aria-describedby={id} variant="contained" color="primary" onClick={handleClick}>
                Open Popover
            </Button> */}
            <IconButton aria-label="share" aria-describedby={id} variant="contained" color="primary" onClick={handleClick}>
                <ShareIcon />
            </IconButton>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
            >
                <Grid className={classes.socials}>
                    <Grid item className={classes.social_item}>
                        <FacebookShareButton
                            url={image}
                            quote={"APOD - Astronomy Picture of the Day."}
                            hashtag="#NASA"
                            className={classes.socialMediaButton}>
                            <FacebookIcon size={36} className={classes.socialMediaIcon} />
                        </FacebookShareButton>
                    </Grid>
                    < Grid item className={classes.social_item}>
                        <TwitterShareButton
                            url={image}
                            title={"APOD - Astronomy Picture of the Day."}
                            hashtag="#NASA"
                            className={classes.socialMediaButton}>
                            <TwitterIcon size={36} className={classes.socialMediaIcon} />
                        </TwitterShareButton>
                    </Grid>
                    < Grid item className={classes.social_item}>
                        <LinkedinShareButton
                            url={image}
                            title={"APOD - Astronomy Picture of the Day."}
                            description={"APOD - Astronomy Picture of the Day."}
                            className={classes.socialMediaButton}>
                            <LinkedinIcon size={36} className={classes.socialMediaIcon} />
                        </LinkedinShareButton>
                    </Grid>
                </Grid>
            </Popover>
        </div>
    );
}

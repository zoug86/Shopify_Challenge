import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Popup from './Popup';
import Liker from './Liker';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 500,
        borderTopRightRadius: '1%',
        borderTopLeftRadius: '1%',
    },
    media: {
        height: 0,
        paddingTop: '85%', // 16:9
        borderTopRightRadius: '1%',
        borderTopLeftRadius: '1%',
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar_img: {
        height: '40px',
        width: '40px',
        borderRadius: '50%'
    },
}));

const ImagePost = ({ title, image, description, date, author }) => {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    return (
        <Card className={classes.root}>
            <CardMedia
                className={classes.media}
                image={image}
                title={title}
                rounded
            />
            <CardHeader

                title={title}
                subheader={date}
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    {description}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <Liker />
                <Popup image={image} />
                <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph>
                        Copyright: {author}
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>

    )
}

export default ImagePost;

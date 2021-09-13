import React, { useEffect, useState } from 'react';
import ImagePost from '../components/ImagePost';
import About from '../components/About';
import Loader from '../components/Loader';
import axios from 'axios';
import { NASA_URL } from '../api';
import spaceLogo from '../assets/space_logo.jpg'

//material UI
import { makeStyles } from '@material-ui/core/styles';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
    container: {
        width: 500,
        background: '#f3f3f3',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 20,
        marginTop: 20,
        marginBottom: 20,
    },
    avatar_img: {
        height: '50px',
        width: '50px',
        borderRadius: '50%'
    },
    image_post: {
        marginBottom: '5px',
    }
}));

const Home = () => {
    const classes = useStyles();

    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [open, setOpen] = useState(false);
    const [scroll, setScroll] = useState('paper');

    const handleClickOpen = (scrollType) => () => {
        setOpen(true);
        setScroll(scrollType);
    };
    const handleClose = () => {
        setOpen(false);
    };
    useEffect(() => {
        if (isLoading) {
            const getNasaImages = async () => {
                const { data } = await axios.get(`${NASA_URL}api_key=${process.env.REACT_APP_NASA_KEY}&count=10`);
                setResults(data);
                setIsLoading(false);
            }
            getNasaImages();
        }

    });
    return (
        isLoading ? <Loader /> : (
            <div className={classes.container}>
                <div>
                    <CardHeader
                        avatar={
                            <Avatar className={classes.avatar}>
                                <img className={classes.avatar_img} src={spaceLogo} alt="logo" />

                            </Avatar>
                        }
                        action={
                            <IconButton aria-label="settings">
                                <MoreVertIcon onClick={handleClickOpen('paper')} />
                                <About open={open} handleClose={handleClose} scroll={scroll} />
                            </IconButton>
                        }
                        className={classes.header}
                        title="Spacestagram"
                        subheader="Brought to you by NASA's Astronomy Photo of the Day (APOD) API"
                    />
                </div>

                {results.map((info, i) => (
                    <ImagePost
                        className={classes.image_post}
                        key={i}
                        title={info.title}
                        image={info.url}
                        description={info.explanation}
                        date={info.date}
                        author={info.copyright}
                    />
                ))}

            </div>
        )
    )

}

export default Home

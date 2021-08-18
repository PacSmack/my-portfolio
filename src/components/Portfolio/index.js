import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

// screenshots import
import uSing from "../../assets/images/portfolio/0.png"
import artinerary from "../../assets/images/portfolio/1.png"
import theTechBlog from "../../assets/images/portfolio/2.png"
import budgetTracker from "../../assets/images/portfolio/3.png"
import brazilianQuiz from "../../assets/images/portfolio/4.png"
import noteTaker from "../../assets/images/portfolio/5.png"

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        position: 'relative',
        justifyContent: 'space-around',
        // overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    imageList: {
        width: "auto",
        height: "auto",
        overflow: "hidden"
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
        fontWeight: "900"
    },
    textFormat: {
        fontWeight: 900
    }

}));


const itemData = [
    {
        img: uSing,
        title: 'uSing',
        githubUrl: 'https://github.com/PacSmack/uSing',
    },
    {
        img: artinerary,
        title: 'Artinerary',
        githubUrl: 'https://github.com/PacSmack/ArtInerary',
    },
    {
        img: theTechBlog,
        title: 'The Tech Blog',
        githubUrl: 'https://github.com/PacSmack/the-tech-blog',
    },
    {
        img: budgetTracker,
        title: 'Budget Tracker',
        githubUrl: 'https://github.com/PacSmack/budget-tracker',
    },
    {
        img: brazilianQuiz,
        title: 'Brazilian Quiz',
        githubUrl: 'https://github.com/PacSmack/brazil-quiz',
    },
    {
        img: noteTaker,
        title: 'Note Taker',
        githubUrl: 'https://github.com/PacSmack/note-taker',
    }
];

export default function Portfolio() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <ImageList rowHeight={180} className={classes.imageList}>
                <ImageListItem key="Subheader" cols={12} style={{ height: 'auto' }}>

                </ImageListItem>
                {itemData.map((item) => (
                    <ImageListItem key={item.img}>
                        <img src={item.img} alt={item.title} />
                        <ImageListItemBar
                            className={classes.textFormat}
                            title={item.title}
                            subtitle={<span className={classes.subtitle}>Repo: <a id="disabled-link" href={item.githubUrl}>{item.githubUrl}</a> </span>}
                            actionIcon={
                                <IconButton
                                    aria-label={`info about ${item.title}`} className={classes.icon}>
                                </IconButton>
                            }
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </div>
    );
}
import React from 'react';
import {Paper, Typography} from '@material-ui/core';

const VideoDetail = (props) => {
    if(!props.video) {
        return <div>Loading...</div>
    }
    const videoSrc = `https://www.youtube.com/embed/${props.video.id.videoId}`
    return (
        <React.Fragment>
            <Paper elevation={6} >
                <iframe frameBorder="0" height="400px" width="100%" title="Video Player"
                    src={videoSrc}></iframe>
            </Paper>
            <Paper elevation={6} style={{padding: '15px'}}>

                <Typography variable='h4'>{props.video.snippet.title} - 
                    {props.video.snippet.channelTitle}</Typography>
                <Typography variable='subtitle1'>{props.video.snippet.channelTitle}</Typography>
                <Typography variable="subtitle2">{props.video.snippet.description}</Typography>
            </Paper>
        </React.Fragment>
        
    )
}

export default VideoDetail;
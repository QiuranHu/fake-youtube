import React from 'react';
import {Grid, Paper, Typography} from '@material-ui/core';

const VideoItem = ({video, onVideoSelect}) => {
    return (
        <Grid item xs={12}>
            <Paper style={{display:'flex', alignment:'center', cursor:'pointer'}} onClick={()=>onVideoSelect(video)}>
                <img style={{marginRight: '20px', height:'100px'}} alt="thumbnail" src={video.snippet.thumbnails.medium.url}></img>
                <Typography variant="subtitle1"><b>{video.snippet.title}</b></Typography>
            </Paper>
        </Grid>
    )
}
export default VideoItem;
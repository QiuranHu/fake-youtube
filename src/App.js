import React from 'react';
// There are many stuff in @material-ui/core, so we have to 
// specify what we need
import {Grid} from '@material-ui/core';

import {SearchBar, VideoDetail, VideoList} from './components/index';

// Default export means that we have only one export
import youtube from './api/youtube';
// There is two kind of Component is React,
// One is Class based Component
// Another is Function based Component
class App extends React.Component {
    state = {
        videos: [],
        selectedVideo: null,

    }
    componentDidMount() {
        this.handleSubmit('pdf generation with react and node')
    }
    onVideoSelect = (video) => {
        this.setState({selectedVideo: video});
    }
    handleSubmit = async (searchTerm) => {
        // const response = await fetch(" https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&key=AIzaSyCViAqHwr3dTX8tbs4buOwJFxH43twyHK4&q=youtube");
        // console.log(response);
        const response = await youtube.get('search', {params: {
            part: 'snippet',
            maxResults: 5,
            key: 'your api',
            q: searchTerm,
        }});
        this.setState( {videos: response.data.items, selectedVideo: response.data.items[0]});
        //console.log(response.data.items);
        
    }
    render() {
        const {selectedVideo, videos} = this.state;
        return (
            <Grid justify="center" container spacing={10}>
                <Grid item xs={12}>
                    <Grid container spacing={10}>
                        <Grid item xs = {12}>
                            <SearchBar onFormSubmit={this.handleSubmit}></SearchBar>
                        </Grid>
                        <Grid item xs={8}>
                            <VideoDetail video={selectedVideo}></VideoDetail>
                        </Grid>
                        <Grid item xs={4}>
                            <VideoList videos={videos} onVideoSelect={this.onVideoSelect}></VideoList>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}

// const App = ()  => {
//     <h1>Youtube clone App</h1>
// }
export default App;
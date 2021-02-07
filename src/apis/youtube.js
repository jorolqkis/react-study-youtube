import axios from 'axios';

const KEY = 'AIzaSyAjm61xzRvwXR3GQlKN3Ui7z5kl2dLh5xg';

export default axios.create ({

    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});
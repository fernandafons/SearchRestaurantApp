import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer XV7r7uKD9-8L2KZ1XhB05PldO3dhaoublaBq0AnydN4w3Mfdw2hiPzviSWjiHZhD2G5LXp0uGg4xAwttdcD9baiHXqoqyr6ej9E3u5Ty33wK5ufzpnt9T9PDj_ECYHYx'
    }
});

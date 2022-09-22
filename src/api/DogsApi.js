import axios from 'axios';

export default axios.create({
  baseURL: 'https://random.dog/woof.json'
});
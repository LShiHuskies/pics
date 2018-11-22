import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 64679f9d2b0749b17927499a2356004de08ef2c98dcac457083e53c9b9f63075'
  }
})

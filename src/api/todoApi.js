import axios from 'axios';

export const add = (todo) => axios.post('/api/todo', todo)
  .then(resp => ({
    httpStatus: resp.status,
    message: resp.statusText,
    data
  }))
  .catch(resp => ({
    httpStatus: resp.response.status,
    message: resp.response.statusText,
  }));  
export const get = (todo) => axios.get('/api/todo', todo);
export const toggle = (todoId) => axios.post(`/api/todo/${todoId}/toggle`);
import axios from 'axios';

export const add = (todo) => axios.post('/api/todo', todo)
  .then(resp => resp.data); 
export const get = (todo) => axios.get('/api/todo', todo);
export const toggle = (todoId) => axios.post(`/api/todo/${todoId}/toggle`);
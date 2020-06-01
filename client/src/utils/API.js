import axios from 'axios';

export default {
  // Gets all books
  getProducts: function () {
    return axios.get('/api/items');
  },
  getProduct: function (id) {
    return axios.get('/api/items/item/' + id);
  },
  saveCart: function (id) {
    console.log(id);
    return axios.post('/api/items/' + id, { withCredentials: true });
  },
  getSess: function () {
    return axios.get('/api/items/cart');
  },
  sendMessage: function (obj) {
    return axios.post('/api/message', obj);
  },
  charged: function (body, myObj) {
    return axios.post('/api/items/charge', body, myObj);
  },
  filtered: function (id) {
    return axios.get('/api/items/category/' + id);
  },
  reduced: function (id) {
    return axios.put('/api/items/reduce/' + id);
  },
  reduceOne: function (id) {
    return axios.get('/api/items/remove/' + id);
  },
  lessThanHundred: function () {
    return axios.get('/api/items/lessThan');
  },
};

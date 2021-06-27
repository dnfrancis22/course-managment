import ky from 'ky';

const baseURL = 'http://localhost:8080/studentCourse';

const api = {
//   /**
//  * Get all customers by either level or state
//  * @param {Object} query - type of query and value
//  * @param {string} query.type - The type of query
//  * @param {string} query.value - The value to be used for the query
//  * @return {Promise<[Object]>} - Customers Data
//  */
index(resource) {
  return ky.get(`${baseURL}/${resource}`).json();
},

filteredIndex(resource,filterValue) {
  return ky.get(`${baseURL}/${resource}/${filterValue}`).json();
},
// /**
//  * Update a customer
//  * @param {Object} payload - customer
//  * @return
//  */

show(id, path = "students") {
return ky.get(`${baseURL}/${path}/${id}`).json();
},

// show(id, resource) {
//   return ky.get(`${baseURL}/${resource}/${id}`).json();
//   },

// export const index = (payload, resource) => ky.get(`${baseURL}/${resource}`).json();

update(id, payload, resource) {
  return ky.put(`${baseURL}/${resource}/${id}`, { json: payload });
},

// export const add = payload => ky.post(`${baseURL}`, { json: payload });

// new example
add(payload, resource)  {
  return ky.post(`${baseURL}/${resource}`, { json: payload });
},

deleteStudent(id, path = "students") {
  return ky.delete(`${baseURL}/${path}/${id}`);
},

};

export default api;
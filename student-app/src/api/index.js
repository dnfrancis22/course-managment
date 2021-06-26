import ky from 'ky';

const baseURL = 'http://localhost:8080/studentCourse';

/**
 * Get all customers by either level or state
 * @param {Object} query - type of query and value
 * @param {string} query.type - The type of query
 * @param {string} query.value - The value to be used for the query
 * @return {Promise<[Object]>} - Customers Data
 */
export const index = (resource) =>
  ky.get(`${baseURL}/${resource}`).json();

  export const filteredIndex = (resource,filterValue) =>
  ky.get(`${baseURL}/${resource}/${filterValue}`).json();

/**
 * Update a customer
 * @param {Object} payload - customer
 * @return
 */

 export const show = (id, path = "students") => ky.get(`${baseURL}/${path}/${id}`).json();


// export const index = (payload, resource) => ky.get(`${baseURL}/${resource}`).json();

export const update = (id, payload, resource) => ky.put(`${baseURL}/${resource}/${id}`, { json: payload });

// export const add = payload => ky.post(`${baseURL}`, { json: payload });

// new example
export const add = (payload, resource) => ky.post(`${baseURL}/${resource}`, { json: payload });

export const deleteStudent = (id, path = "students") => ky.delete(`${baseURL}/${path}/${id}`);

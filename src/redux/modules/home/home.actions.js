import axiosCall from '../../configurations/network-services/axiosCall';

export const getAllDataAction = () => {  
  const path = 'https://jsonplaceholder.typicode.com/posts';
  return axiosCall('get', path, 'GET_LISTS');
};

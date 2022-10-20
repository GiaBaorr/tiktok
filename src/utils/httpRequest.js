import axios from 'axios';

const request = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
});

// axios.create giúp cấu hình cơ bản
// thay vì axios.get(fullURL, {params})
// => request.get({params})

// Xử lý data.data
// .then((res) => {
//   // log(res.data.data); (res d  o axios đưa về)
//   // data 1 : của axios
//   // data 2 là của API
//   //ngoài ra còn có status, header ....
//   setSearchResult(res.data.data);
//   setLoading(false);
// })

export const get = async (path, options = {}) => {
    const response = await request.get(path, options);
    return response.data;
    // get method only return data
    // can keep configuring to get status, header, ...
};

export default request;

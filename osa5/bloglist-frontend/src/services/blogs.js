import axios from 'axios';
const baseUrl = 'http://localhost:3001/api/blogs';

let token = null;

const setToken = newToken => {
  token = `bearer ${newToken}`;
};

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then(response => response.data);
};

const create = async (blog) => {
  const config = {
    headers: { Authorization: token }
  };
  const response = await axios
    .post(baseUrl, blog, config);

  return response.data;
};

const update = async (blog) => {
  const config = {
    headers: { Authorization: token }
  };

  const preparedBlog = {
    ...blog,
    user: blog.user ? blog.user.id : undefined
  };

  const response = await axios
    .put(baseUrl + '/' + blog.id, preparedBlog, config);

  return response.data;
};

const remove = async (blog) => {
  const config = {
    headers: { Authorization: token }
  };

  const response = await axios
    .delete(baseUrl + '/' + blog.id, config);

  return response;
};


const enrichWithPermissions = (blogs, user) => {
  blogs.forEach(blog => {
    blog.canRemove = blog.user ? (blog.user.username === user.username) : false;
  });
};

export default { getAll, setToken, create, update, remove, enrichWithPermissions };
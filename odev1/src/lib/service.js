import axios from 'axios';

const getData = async (userId) => {
  try {
    const userResp = await axios(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );

    const postResp = await axios(
      `https://jsonplaceholder.typicode.com/posts/${userId}`
    );

    return [userResp.data, postResp.data];
  } catch (err) {
    console.error(err);
  }
};

export default getData;

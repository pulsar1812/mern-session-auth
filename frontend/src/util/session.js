import axios from 'axios';

export const checkLoggedIn = async () => {
  const res = await axios.get('/api/session');
  const { user } = res.data;
  let preloadedState = {};
  if (user) {
    preloadedState = {
      session: user
    };
  }
  return preloadedState;
};

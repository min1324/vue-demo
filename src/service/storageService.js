// 本地缓存服务

const PREFIX = 'min_';

// user 模块
const USER_PREFIX = `${PREFIX}user_`;
const USER_TOKEN = `${USER_PREFIX}token`;
const USER_INFO = `${USER_PREFIX}info`;
const USER_IMG = `${USER_PREFIX}img`;

// 储存
const set = (key, data) => {
  localStorage.setItem(key, data);
};

// 读取
const get = (key) => localStorage.getItem(key);

export default {
  set,
  get,
  USER_TOKEN,
  USER_INFO,
  USER_IMG,
};

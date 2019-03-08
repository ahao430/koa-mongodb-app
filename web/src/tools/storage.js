const Storage = {
  save: (key, val) => {
    localStorage.setItem(key, btoa(JSON.stringify(val)));
  },
  load: (key) => {
    let val = localStorage.getItem(key);
    return val ? JSON.parse(atob(val)) : null;
  },
  remove: (key) => {
    localStorage.removeItem(key);
  },
  clear: () => {
    localStorage.clear();
  },
};
export default Storage;

const storage = {
  set: (key, data) => {
    if (typeof data === "object") {
      localStorage.setItem(key, JSON.stringify({ ...data }));
    }
    localStorage.setItem(key, data);
  },
  get: (key, defaultValue) => {
    const value = localStorage.getItem(key ?? defaultValue);
    if (typeof value === "object") {
      return JSON.parse(value);
    }
    return value;
  },
  remove: () => {},
};

export default storage;

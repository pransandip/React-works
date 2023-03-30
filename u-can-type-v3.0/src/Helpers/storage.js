import { AES, enc } from "crypto-js";
const SECRET_KEY =
  process.env.REACT_APP_PASSPHRASE_STORAGE_KEY || "secret-key-xxx-123";

// * Set, get & remove: data from local storage
const storage = {
  set: (key, data) => {
    if (typeof data === "object") {
      localStorage.setItem(
        key,
        AES.encrypt(JSON.stringify({ ...data }), SECRET_KEY).toString()
      );
      return;
    }
    localStorage.setItem(key, AES.encrypt(data, SECRET_KEY).toString());
  },
  get: (key, defaultValue) => {
    const value = localStorage.getItem(key);
    if (!value) return;

    if (typeof defaultValue === "object") {
      return JSON.parse(AES.decrypt(value, SECRET_KEY).toString(enc.Utf8));
    }
    return AES.decrypt(value, SECRET_KEY).toString(enc.Utf8);
  },
  remove: (key) => {
    localStorage.removeItem(key);
  },
};

export default storage;

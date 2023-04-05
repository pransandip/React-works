export const getURLSearchParams = async (object) => {
  let newObj = {
    ...object,
  };
  const params = new URLSearchParams();
  Object.keys(newObj).forEach((key) => params.append(key, object[key]));
  return params;
};

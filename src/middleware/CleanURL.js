const cleanUrl = (url) => {
  if (url) {
    const data = url.split("SX300").join("");
    return data;
  }
};

export default cleanUrl;

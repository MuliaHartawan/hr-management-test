const responseFormatter = (status, data = null, message = "") => {
  return {
    status: status,
    message: message,
    data: data,
  };
};

module.exports = responseFormatter;

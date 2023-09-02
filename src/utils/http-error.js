function makeHttpError({ statusCode, errorMessage }) {
  return {
    headers: {
      "Content-Type": "application/json",
    },
    statusCode,
    body: JSON.stringify({
      success: false,
      error: errorMessage,
    }),
  };
}

module.exports = { makeHttpError };

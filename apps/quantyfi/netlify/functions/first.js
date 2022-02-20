exports.handler = async function () {
  return {
    status: 200,
    body: JSON.stringify({
      message: 'My first serverless response',
    }),
  };
};

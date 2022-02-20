import { Handler } from '@netlify/functions';

// const api = 'https://api.sgx.com/securities/v1.1/stocks';

const handler: Handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Hello World' }),
  };
};

export { handler };

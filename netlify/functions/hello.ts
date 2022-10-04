import { Handler } from "@netlify/functions";

const handler: Handler = async (event, context) => {
  const greeting = process.env.GREETING;
  return {
    statusCode: 200,
    body: JSON.stringify({ message: `Hello World: "${greeting}"` }),
  };
};

export { handler };

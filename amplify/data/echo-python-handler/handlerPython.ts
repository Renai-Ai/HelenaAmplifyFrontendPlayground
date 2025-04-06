import type { Schema } from '../resource'
import got from 'got';

export const handler: Schema["echoPython"]["functionHandler"] = async (event, context) => {
  const start = performance.now();
  var response = await got.post(`https://4kp73orvs2hov7yropu6wyypp40mbqlm.lambda-url.us-east-1.on.aws/`,{
    json: {
      message: event.arguments.content
    }
  }).json();
  var result = JSON.stringify(response);
  var JSONresult = JSON.parse(result);
  return {
    content: `Echoing Python content [changed 2025-Apr-06]: ${JSONresult.message}`,
    executionDuration: performance.now() - start
  };
};
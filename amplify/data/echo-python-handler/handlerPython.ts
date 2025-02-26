import type { Schema } from '../resource'
import got from 'got';

export const handler: Schema["echoPython"]["functionHandler"] = async (event, context) => {
  const start = performance.now();
  var response = await got.post(`https://iiygu53tm6xjmdo7kemqoaytey0xfido.lambda-url.us-east-2.on.aws/`,{
    json: {
      message: event.arguments.content
    }
  }).json();
  var result = JSON.stringify(response);
  var JSONresult = JSON.parse(result);
  return {
    content: `Echoing Python content [changed 2024-Nov-03]: ${JSONresult.message}`,
    executionDuration: performance.now() - start
  };
};
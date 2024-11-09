import type { Schema } from '../resource'

export const handler: Schema["echo"]["functionHandler"] = async (event, context) => {
  const start = performance.now();
  return {
    content: `Echoing content [changed 2024-Nov-03]: ${event.arguments.content}`,
    executionDuration: performance.now() - start
  };
};
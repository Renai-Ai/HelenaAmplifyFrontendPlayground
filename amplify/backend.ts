import { defineBackend } from "@aws-amplify/backend";
import { auth } from "./auth/resource";
import { data } from "./data/resource";
import { HelenaHelloWorldLambdaStack } from "./custom-functions/resources";
/**
 * @see https://docs.amplify.aws/react/build-a-backend/ to add storage, functions, and more
 */
const backend = defineBackend({
  auth,
  data,
});

// Add the HelloWorld custom Lambda stack to the backend
new HelenaHelloWorldLambdaStack(
  backend.createStack("HelenaHelloWorldLambdaStack"),
  "helenaHelloWorldLambdaResource",
  {}
);

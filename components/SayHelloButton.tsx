"use client";

import { Amplify } from "aws-amplify";
import { generateClient } from "aws-amplify/data";
import outputs from "@/amplify_outputs.json";
import type { Schema } from "@/amplify/data/resource";
Amplify.configure(outputs);
import Button from "./Button";

const client = generateClient<Schema>();
import React from 'react';

const SayHelloButton = () => {
    return <Button label="Say Hello" onClick={async () => {
                     const {data, errors} = await client.queries.echo({ content: "Hello, from the frontend!" });
                     alert(data?.content || errors?.map((e) => e.message).join("\n"));
                   }}/>;
  };

export default SayHelloButton;
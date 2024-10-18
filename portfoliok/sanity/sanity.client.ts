// sanity/sanity.client.ts

import { createClient, type ClientConfig } from "@sanity/client";

const config: ClientConfig = {
  projectId: "z8itxxhs",
  dataset: "production",
  apiVersion: "2024-10-17",
  useCdn: false,
};

const client = createClient(config);

export default client;
import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4ob3ova1k8l01z719vq852a/master",
  cache: new InMemoryCache()
});

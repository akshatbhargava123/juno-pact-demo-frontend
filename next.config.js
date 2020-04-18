require('dotenv').config();

const {
  GRAPHQL_URI,
  HASURA_ADMIN_SECRET,
} = process.env;

module.exports = {
  env: {
    GRAPHQL_URI,
    HASURA_ADMIN_SECRET,
  },
  experimental: {
    jsconfigPaths: true, // enables it for both jsconfig.json and tsconfig.json
  },
  devIndicators: {
    autoPrerender: false,
  },
};

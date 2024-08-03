module.exports = {
  tools: {
    output: {
      mode: "tags-split",
      baseUrl: "http://localhost:8080/",
      schemas: "src/model",
      client: "react-query",
    },
    input: {
      target: "./tools.json",
    },
  },
};

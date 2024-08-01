module.exports = {
    tools: {
      output: {
        mode: 'tags-split',
        target: 'src/tools-hooks.ts',
        schemas: 'src/model',
        client: 'react-query',
      },
      input: {
        target: './tools.json',
      },
    },
  };
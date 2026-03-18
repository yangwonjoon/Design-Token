/**
 * Style Dictionary 설정
 * tokens/tokens.json → src/styles/variables.css
 */

export default {
  source: ["tokens/tokens.json"],

  platforms: {
    css: {
      transformGroup: "css",
      prefix: "",
      buildPath: "src/styles/",
      files: [
        {
          destination: "variables.css",
          format: "css/variables",
          options: {
            outputReferences: true,
            selector: ":root",
          },
        },
      ],
    },
  },
};

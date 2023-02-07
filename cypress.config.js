require("dotenv").config();

var projectId = process.env.CYPRESS_PROJECT_ID;

module.exports = {
  projectId: projectId,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  component: {
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    },
  },
};

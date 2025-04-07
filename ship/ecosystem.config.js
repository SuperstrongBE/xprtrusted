module.exports = {
  apps: [
    {
      name: "quests.tables",
      script: "./dist/services/tables/index.js",
      watch: false,
      autorestart: false,
      env: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
      },
    },
    {
      name: "quests.actions",
      script: "./dist/services/actions/index.js",
      watch: false,
      autorestart: false,
      env: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
      },
    },
  ],
};

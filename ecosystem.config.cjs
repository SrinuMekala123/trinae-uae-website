module.exports = {
  apps: [
    {
      name: "trinai-uae-website",
      script: "npx",
      args: "vite preview --port 8182 --host 0.0.0.0",
      cwd: __dirname,
      exec_mode: "fork",
      env: {
        NODE_ENV: "production",
      },
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "500M",
    },
  ],
};

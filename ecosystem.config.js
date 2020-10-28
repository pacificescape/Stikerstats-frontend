module.exports = {
    apps : [{
      name: 'FRONTEND',
      script: 'npm',
  
      // Options reference: https://pm2.keymetrics.io/docs/usage/application-declaration/
      args: 'run build',
      instances: 1,
      autorestart: true,
      watch: true,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development'
      },
      env_production: {
        NODE_ENV: 'production'
      }
    }],
  
    deploy : {
      production : {
        user : 'pacificescape',
        host : '212.83.163.1',
        ref  : 'origin/master',
        repo : 'git@github.com:pacificescape/steakerstats-front.git',
        path : '.',
        'post-deploy' : 'npm install && npm run build && pm2 reload ecosystem.config.js --env production'
      }
    }
  };
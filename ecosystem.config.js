module.exports = {
  apps : [
    {
      name: 'art_quest_backend',
      cwd: '/home/bdmade/artQuest/backend',
      script: 'yarn',
      args: 'start',
      interpreter: '/bin/bash',
      watch: '.',
      env:{
        NODE_ENV:"production"
      },
   },
    {
      name: 'art_quest_frontend',
      cwd: '/home/bdmade/artQuest/frontend',
      script: 'yarn',
      args: 'start',
      interpreter: '/bin/bash',
      watch: '.',
      env:{
        NODE_ENV:"production"
      },
    }
],

 };

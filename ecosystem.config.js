module.exports = {
  apps : [
    {
      name: 'art_quest_backend',
      cwd: '/home/bdmade/artQuest/backend',
      script: 'npm',
      args: 'start',
      watch: '.',
      env:{
        NODE_ENV:"production"
      },
   },
],

 };

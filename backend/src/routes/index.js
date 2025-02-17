module.exports = (app) => {
  const historyRoutes = require('./history.routes');
  const videoRoutes = require('./video.routes');
  const filmeRoutes = require('./filmes.routes')

  app.use('/api', historyRoutes);
  app.use('/api', videoRoutes);
  app.use('/filmes', filmeRoutes)
};

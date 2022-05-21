require('dotenv').config();
const sequelize = require('./db/database');

const app = require('./app');

// HANDLE UNCAUGHT EXCEPTIONS

process.on('uncaughtException', (err) => {
  console.log(err.name, err.message);
  process.exit(1);
});

const port = process.env.PORT || 3000;

sequelize
  .sync({ force: true })
  .then(() => {
    app.listen(port, () => {
      console.log(`server running on port ${port}`);
    });
    console.log('Connection has been established successfully.');
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });

process.on('unhandledRejection', (err) => {
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});

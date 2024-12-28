const app = require('./app');

const PORT = 3000;

console.log('starting server...');

try {
  app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
  });
} catch (error) {
  console.log(`Starting server failed, error: ${error}`);
}

import 'dotenv/config';
import express from 'express';

export default async function startServer(port = process.env.PORT || 3000) {
  const app = express();

  app.use(await (await import('./routers/index.js')).default);

  app.listen(port, () => console.log(`Listening on http://localhost:${port}`));
}

startServer();
import { Elysia } from 'elysia';

const port = process.env.PORT || 3000;

const app = new Elysia()
  .get('/', () => ({
    message: 'Hello World from ElysiaJS + Bun!',
    status: 'success',
  }))
  .get('/health', () => ({
    status: 'ok',
    timestamp: new Date().toISOString(),
  }))
  .listen(port);

console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`);

export type App = typeof app;

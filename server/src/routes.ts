import { Router } from 'express';
import { SessionController, UserController } from './controllers';

const routes = Router();

routes.post('/users', async (request, response) => {
  const userController = new UserController();

  const { content, statusCode } = await userController.create(request.body);

  return response.status(statusCode).json(content);
});

routes.post('/sessions', async (request, response) => {
  const sessionController = new SessionController();

  const { content, statusCode } = await sessionController.create(request.body);

  return response.status(statusCode).json(content);
});

export default routes;

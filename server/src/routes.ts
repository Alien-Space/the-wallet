import { Router } from 'express';
import {
  DocumentController,
  SessionController,
  UserController,
} from './controllers';

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

routes.post('/documents', async (request, response) => {
  const documentController = new DocumentController();

  const { content, statusCode } = await documentController.create(request.body);

  return response.status(statusCode).json(content);
});

routes.get('/documents/:user_id', async (request, response) => {
  const documentController = new DocumentController();

  const { user_id } = request.params;

  const { content, statusCode } = await documentController.show({ user_id });

  return response.status(statusCode).json(content);
});

export default routes;

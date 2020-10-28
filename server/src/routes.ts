import { Router } from 'express';
import UserController from './controllers/UserController';

const routes = Router();

routes.post('/users', async (request, response) => {
  const userController = new UserController();

  const { content, statusCode } = await userController.create(request.body);

  return response.status(statusCode).json(content);
});

export default routes;

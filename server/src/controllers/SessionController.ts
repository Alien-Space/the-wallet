import { getRepository } from 'typeorm';
import { User } from '../database/entities';

interface createSession {
  email: string;
  password: string;
}

export default class SessionController {
  async create({ email, password }: createSession) {
    try {
      const userRepository = getRepository(User);

      const userExists = await userRepository.findOne({ where: { email } });

      if (!userExists) {
        throw new Error('User does not exists');
      }

      if (userExists.password !== password) {
        throw new Error('User password does not match');
      }

      return {
        statusCode: 200,
        content: { ...userExists, password: undefined },
      };
    } catch (err) {
      return { statusCode: 400, content: { message: err.message } };
    }
  }
}

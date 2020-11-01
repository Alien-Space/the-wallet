import { getRepository } from 'typeorm';
import { User } from '../database/entities';

interface createUser {
  name: string;
  email: string;
  pin: string;
}

export default class UserController {
  async create({ email, ...rest }: createUser) {
    try {
      const userRepository = getRepository(User);

      const userExists = await userRepository.findOne({ where: { email } });

      if (userExists) {
        throw new Error('User already exists');
      }

      const newUser = userRepository.create({ email, ...rest });

      await userRepository.save(newUser);

      return { statusCode: 201, content: { data: newUser } };
    } catch (err) {
      return { statusCode: 400, content: { message: err.message } };
    }
  }
}

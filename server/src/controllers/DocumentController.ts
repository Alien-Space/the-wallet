import { getRepository } from 'typeorm';
import { User, Document } from '../database/entities';

interface createDocument {
  user: User;
  name: string;
  type: string;
  number: string;
  password: string;
}

interface showDocuments {
  user_id: string;
}

export default class DocumentController {
  async create({ number, ...rest }: createDocument) {
    try {
      const documentRepository = getRepository(Document);

      const documentExists = await documentRepository.findOne({
        where: { number },
      });

      if (documentExists) {
        throw new Error('Document already exists!');
      }

      const newDocument = documentRepository.create({ number, ...rest });
      await documentRepository.save(newDocument);

      return { statusCode: 201, content: { ...newDocument } };
    } catch (err) {
      return { statusCode: 400, content: { message: err.message } };
    }
  }

  async show({ user_id: user }: showDocuments) {
    try {
      const documentRepository = getRepository(Document);

      const userRepository = getRepository(User);

      const userExists = await userRepository.findOne(user);

      if (!userExists) {
        throw new Error('User does not exists');
      }

      const documents = await documentRepository.find({ where: { user } });

      return { statusCode: 200, content: documents };
    } catch (err) {
      return { statusCode: 400, content: { message: err.message } };
    }
  }
}

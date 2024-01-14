import { MessagesRepository } from './messages.repository';

export class MessagesService {
  MessagesRepo: MessagesRepository;
  constructor() {
    //Service is creating it's own dependencies
    //Don't do this on real apps
    this.MessagesRepo = new MessagesRepository();
  }

  findOne(id: string) {
    return this.MessagesRepo.findOne(id);
  }

  findAll() {
    return this.MessagesRepo.findAll();
  }

  create(content: string) {
    return this.MessagesRepo.create(content);
  }
}

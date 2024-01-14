import { Injectable } from '@nestjs/common';
import { MessagesRepository } from './messages.repository';

@Injectable()
export class MessagesService {
  //   The following code is equalavant to this Code's short handwriting
  //   messagesRepo: MessagesRepository;
  //   constructor(messagesRepo: MessagesRepository) {
  //     this.messagesRepo = messagesRepo;
  //   }
  constructor(public messagesRepo: MessagesRepository) {}

  findOne(id: string) {
    return this.messagesRepo.findOne(id);
  }

  findAll() {
    return this.messagesRepo.findAll();
  }

  create(content: string) {
    return this.messagesRepo.create(content);
  }
}

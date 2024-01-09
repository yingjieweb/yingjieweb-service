import { Injectable } from '@nestjs/common';

@Injectable()
export class BulletCommentsService {
  getHello(): string {
    return 'Hello BulletComments!';
  }
}

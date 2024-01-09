import { Module } from '@nestjs/common';
import { BulletCommentsController } from './bullet-comments.controller';
import { BulletCommentsService } from './bullet-comments.service';

@Module({
  controllers: [BulletCommentsController],
  providers: [BulletCommentsService],
})
export class BulletCommentsModule {}

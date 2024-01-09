import { Controller, Delete, Get, Post } from '@nestjs/common';
import { BulletCommentsService } from './bullet-comments.service';

@Controller('bullet-comments')
export class BulletCommentsController {
  constructor(private readonly bulletCommentsService: BulletCommentsService) {}

  @Get('/get-all-bullet-comments')
  getAllBulletComments(): string {
    return this.bulletCommentsService.getHello();
  }

  @Post('/get-bullet-comment-by-id')
  getBulletCommentById(): string {
    return this.bulletCommentsService.getHello();
  }

  @Post('/add-bullet-comment')
  addBulletComment(): string {
    return this.bulletCommentsService.getHello();
  }

  @Delete('/delete-bullet-comment')
  deleteBulletComment(): string {
    return this.bulletCommentsService.getHello();
  }

  @Post('/update-bullet-comment')
  updateBulletComment(): string {
    return this.bulletCommentsService.getHello();
  }
}

import { Test, TestingModule } from '@nestjs/testing';
import { BulletCommentsController } from './bullet-comments.controller';

describe('BulletCommentsController', () => {
  let controller: BulletCommentsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BulletCommentsController],
    }).compile();

    controller = module.get<BulletCommentsController>(BulletCommentsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

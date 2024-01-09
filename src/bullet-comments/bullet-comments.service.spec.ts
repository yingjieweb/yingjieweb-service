import { Test, TestingModule } from '@nestjs/testing';
import { BulletCommentsService } from './bullet-comments.service';

describe('BulletCommentsService', () => {
  let service: BulletCommentsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BulletCommentsService],
    }).compile();

    service = module.get<BulletCommentsService>(BulletCommentsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

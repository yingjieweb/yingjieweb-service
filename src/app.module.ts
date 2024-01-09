import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BulletCommentsModule } from './bullet-comments/bullet-comments.module';

@Module({
  imports: [BulletCommentsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

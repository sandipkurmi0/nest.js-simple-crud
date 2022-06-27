import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import {ItemsModule} from './items/items.modules'
import { MongooseModule } from '@nestjs/mongoose';
import config from './config/keys' //create config folder and create keys file and put mongoos key inside it

@Module({
  imports: [ItemsModule,MongooseModule.forRoot(config.mongoURI) ],
  controllers: [AppController ],
  providers: [AppService],
})
export class AppModule {}

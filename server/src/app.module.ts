import { Module } from '@nestjs/common';
import { TrackModule } from './track/track.module';
import { MongooseModule } from '@nestjs/mongoose';
import { FileModule } from './file/file.module';
import {ServeStaticModule} from '@nestjs/serve-static';
import * as path from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot({rootPath: path.resolve(__dirname, 'static'),}),
    MongooseModule.forRoot('mongodb+srv://olgas:1234.com@olga-project.t96hi11.mongodb.net/?retryWrites=true&w=majority&appName=Olga-project'),
    TrackModule,
    FileModule,
  ],
  
})
export class AppModule {};

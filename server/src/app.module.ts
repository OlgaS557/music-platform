import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TrackModule } from './track/track.module';
import { MongooseModule } from '@nestjs/mongoose';
import { FileModule } from './file/file.module';
import { v2 as cloudinary } from 'cloudinary';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal: true, }),
    // ServeStaticModule.forRoot({rootPath: path.resolve(__dirname, 'static'),}), // was before changing to cloudinary
    MongooseModule.forRoot(process.env.MONGO_URI!),
    TrackModule,
    FileModule,
  ],  
})
export class AppModule {
  constructor(private configService: ConfigService) {
    cloudinary.config({
      cloud_name: this.configService.get('CLOUDINARY_CLOUD_NAME'),
      api_key: this.configService.get('CLOUDINARY_API_KEY'),
      api_secret: this.configService.get('CLOUDINARY_API_SECRET'),
    });

    console.log('Cloudinary initialized:', {
      name: this.configService.get('CLOUDINARY_CLOUD_NAME'),
      key: this.configService.get('CLOUDINARY_API_KEY'),
      secret: !!this.configService.get('CLOUDINARY_API_SECRET'),
    });
  }
};

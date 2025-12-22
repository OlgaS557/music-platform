import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';


const start = async () => {
  try {
    const PORT = process.env.PORT || 5000;
    const app = await NestFactory.create(AppModule);
    app.enableCors({
      origin: [
      'http://localhost:3000',
      'https://music-platform-five-sooty.vercel.app',
    ],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
      credentials: true,
    });
    await app.listen(PORT, () => console.log(`server started on port ${PORT}`))
  } catch (e) {
    console.log(e);    
  }
}
start();
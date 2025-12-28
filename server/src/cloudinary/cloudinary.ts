import { CloudinaryStorage } from 'multer-storage-cloudinary';
import { v2 as cloudinary } from 'cloudinary';

export const imageStorage = new CloudinaryStorage({
  cloudinary,
  params: async () => ({
    folder: 'music-platform/images',
    resource_type: 'image',
  }),
});

export const audioStorage = new CloudinaryStorage({
  cloudinary,
  params: async () => ({
    folder: 'music-platform/audio',
    resource_type: 'video',
  }),
});
export default cloudinary;

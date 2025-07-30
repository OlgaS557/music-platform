import { Injectable } from "@nestjs/common";
import { Track } from "./schemas/track.schema";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Comment } from "./schemas/comment.schema";
import { CreateTrackDto } from "./dto/create-track.dto";
import { CreateCommentDto } from "./dto/create-comment.dto";
import { FileService, FileType } from "src/file/file.service";

@Injectable()
export class TrackService {    

    constructor(@InjectModel(Track.name) private trackModel: Model<Track>,
                @InjectModel(Comment.name) private commentModel: Model<Comment>,
                private fileService: FileService) {}

    async create(dto: CreateTrackDto, picture, audio): Promise<Track> {
        const audioPath = this.fileService.createFile(FileType.AUDIO, audio);
        const picturePath = this.fileService.createFile(FileType.IMAGE, picture);
        const track = await this.trackModel.create({...dto, listens: 0, audio: audioPath, picture: picturePath});
        return track.save();
    }

    async getAll(count = 10, offset = 0): Promise<Track[]> {// pagination
        if (count < 0 || offset < 0) {
            throw new Error('Count and offset must be non-negative')
        }
        const tracks = await this.trackModel.find().skip(offset).limit(count);
        return tracks;
    }
    async search(query: string): Promise<Track[]> {
        const tracks = await this.trackModel.find({
            name: { $regex: new RegExp(query, 'i')}
        });
        return tracks;
    }

    async getOne(id: string): Promise<Track|null> {
        const track = await this.trackModel.findById(id).populate('comments');
        return track;
    }

    async delete(id: string): Promise<Track> {
        const track = await this.trackModel.findByIdAndDelete(id);    
        return track?.id
    }

    async addComment(dto: CreateCommentDto): Promise<Comment> {
        const track = await this.trackModel.findById(dto.trackId);
        const comment = await this.commentModel.create({...dto});
        track?.comments.push(comment.id);
        await track?.save();
        return comment;
    }
    async listen (id: string) {
        const track = await this.trackModel.findById(id);
        if (! track) {
            throw new Error ('Track not found')
        }
        track.listens += 1;
        track.save();
    }
}
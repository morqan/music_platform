import { Module } from '@nestjs/common';
import {TrackModule} from "./track/track.module";
import {MongooseModule} from "@nestjs/mongoose";
import {FileModule} from "./file/file.module";


@Module({
    imports: [MongooseModule.forRoot('mongodb+srv://musicAdmin:musicAdmin@cluster0.1ecxe.mongodb.net/MusicPlatform?retryWrites=true&w=majority'),
        TrackModule, FileModule]
})
export class AppModule {}

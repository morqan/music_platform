import { Module } from '@nestjs/common';
import {TrackModule} from "./track/track.module";
import {MongooseModule} from "@nestjs/mongoose";


@Module({
    imports: [MongooseModule.forRoot('mongodb+srv://musicAdmin:musicAdmin@cluster0.1ecxe.mongodb.net/MusicPlatform?retryWrites=true&w=majority'),TrackModule]
})
export class AppModule {}

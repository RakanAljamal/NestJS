import { Module } from "@nestjs/common";
import { TypeOrmModule } from '@nestjs/typeorm';
import { Subject } from './subject.entity';
import { Teacher } from './teacher.entity';
import { TrainingController } from "./training.controller";

export const SchoolEntities = [Subject, Teacher];

@Module({
    imports: [TypeOrmModule.forFeature(SchoolEntities)],
    controllers: [TrainingController]
})
export class SchoolModule {
}

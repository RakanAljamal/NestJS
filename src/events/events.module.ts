import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Attendee } from './attendee.entity';
import { Event } from './event.entity';
import { EventsController } from './events.controller';
import { EventsService } from './events.service';
export const EventEntities = [Event, Attendee];

@Module({
  imports: [
    TypeOrmModule.forFeature(EventEntities),
  ],
  controllers: [EventsController],
  providers: [EventsService]
})
export class EventsModule { }

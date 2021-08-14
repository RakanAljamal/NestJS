import {Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put} from "@nestjs/common";
import {Event, EventService} from "./events.service";
import {CreateEventDto} from "./create-event-dto";
import {UpdateEventDto} from "./update-event-dto";

@Controller('/events')
export class EventsController {

    private events: Event[] = [];

    constructor(private readonly eventService: EventService) {
    }

    @Get('/all')
    findAll() {
        return this.events;
    }


    @Get('/:id')
    findOne(@Param('id') eventId) {
        return this.events.find(({id}) => id === eventId);
    }

    @Post()
    @HttpCode(203)
    create(@Body() body: CreateEventDto) {

        this.events.push(body);
        return body;
    }

    @Put('/:id')
    update(@Param() eventId, @Body() body: UpdateEventDto) {
        const updatedEventIndex = this.events.findIndex(({id}) => id === eventId);
        let event = {
            ...this.events[updatedEventIndex],
            ...body
        };
        this.events[updatedEventIndex] = event;

        return event;


    }

    @Delete()
    remove() {

    }

}

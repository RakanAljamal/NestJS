import {Injectable} from "@nestjs/common";

export interface Event {
    id: string;
    name: string;
}

@Injectable()
export class EventService {

    findAll(): Event {
        return {
            id: '1',
            name: "Special event"
        } as Event;
    }
}

import { Lodger } from './lodger';
import { Payment } from './payment';
import { CalendarEvent } from 'ngx-calendar';
import { Property } from './property';
export interface Reservation extends CalendarEvent {
    nights?: number;
    status?: string;
    lodger?: Lodger;
    payments?: Payment[];
    code?: string;
    property?: Property;
}

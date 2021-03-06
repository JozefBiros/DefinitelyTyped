import { EventsKey } from 'ol/events';
import Event from 'ol/events/Event';
import Target from 'ol/events/Target';
export function unByKey(key: EventsKey | EventsKey[]): void;
export default class Observable extends Target {
    constructor();
    changed(): void;
    getRevision(): number;
    on(type: string | string[], listener: ((param0: any) => void)): EventsKey | EventsKey[];
    once(type: string | string[], listener: ((param0: any) => void)): EventsKey | EventsKey[];
    un(type: string | string[], listener: ((param0: any) => void)): void;
    on(type: 'change', listener: (evt: Event) => void): EventsKey;
    once(type: 'change', listener: (evt: Event) => void): EventsKey;
    un(type: 'change', listener: (evt: Event) => void): void;
}

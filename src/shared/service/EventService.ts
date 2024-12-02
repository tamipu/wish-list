import { Subject } from 'rxjs';

export class EventService {
  private subject = new Subject<any>();

  emit(eventName: string, payload: any) {
    this.subject.next({ name: eventName, payload });
  }

  listen(eventName: string, callBack: (event: any) => void) {
    this.subject.asObservable().subscribe((event) => {
      if (event.name === eventName) {
        callBack(event.payload);
      }
    });
  }
}

export const events = new EventService();

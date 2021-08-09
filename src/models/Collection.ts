// import { User, UserProps } from './User';
import { Eventing } from './Eventing';
import axios, { AxiosResponse } from 'axios';

export class Collection<T1, T2> {
  models: T1[] = [];
  events: Eventing = new Eventing();

  constructor(public rootUrl: string, public deserialize: (json: T2) => T1) {}

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  fetch(): void {
    axios.get(this.rootUrl).then((res: AxiosResponse) => {
      res.data.forEach((value: T2) => {
        this.models.push(this.deserialize(value));
      });
      this.trigger('change');
    });
  }
}

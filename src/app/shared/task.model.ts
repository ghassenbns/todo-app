export class task {
  public title: string;
  public time: string;
  public done: boolean;

  constructor(title: string, time: string, done: boolean) {
    this.title = title;
    this.time = time;
    this.done = done;
  }
}

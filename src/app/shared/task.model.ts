export class Task {
  public title: string;
  public time: string;
  public done: boolean;
  public uid: string;

  constructor(title: string, time: string, done: boolean, uid: string) {
    this.title = title;
    this.time = time;
    this.done = done;
    this.uid = uid;
  }
}

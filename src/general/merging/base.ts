export class Task {
  constructor(readonly title: string) {}
  markAsDone (): Task {
    return this
  }
}
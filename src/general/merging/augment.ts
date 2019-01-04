import { Task } from './base'

declare module './base' {
  interface Task {
    getTitle: () => string
  }
}

Task.prototype.getTitle = () => 'Works but you loose \'this\''

console.log(new Task('A test task').getTitle())

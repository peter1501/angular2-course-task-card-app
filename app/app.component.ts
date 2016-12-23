import {Component} from '@angular/core'
import {Task} from "./model/task";

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css']
})

export class AppComponent {
    private tasks: Task[] = [];

    private currentTask = new Task(null, false);

    addTask(): void {
        let task = new Task(this.currentTask.content, this.currentTask.completed);
        this.tasks.push(task);
        this.currentTask = new Task(null, false);
    }

    public deleteTask(task): void {
        var index = this.tasks.indexOf(task, 0);
        if (index > -1) {
            this.tasks.splice(index, 1);
        }
    }
}
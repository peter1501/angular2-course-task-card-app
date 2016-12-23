import {Component, Input, Output, EventEmitter} from "@angular/core";

import {Task} from "../model/task"
import {AppComponent} from "../app.component"

@Component({
    selector: 'app-card',
    templateUrl: 'card.component.html',
    styleUrls: ['card.component.css'],
    moduleId: module.id

})
export class CardComponent{
    @Input() task: Task;
    @Output() myEvent = new EventEmitter();

    statusToggle():void {
        this.task.completed = !this.task.completed;
    }

    triggerDelete():void {
        this.myEvent.emit({ task:this.task})
    }

}
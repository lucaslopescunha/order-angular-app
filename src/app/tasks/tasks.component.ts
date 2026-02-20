import { Component, Input } from "@angular/core";

import { TasksService } from "./tasks.service";


@Component({
    selector:'app-tasks',
    standalone: false,
    styleUrl: './tasks.component.css',
    templateUrl: './tasks.component.html'
})
export class TasksComponent {
    @Input({ required: true }) name!: string;    
    @Input({ required: true }) userId!: string;
    isAddingTask = false;
    

    constructor(private tasksService: TasksService) { }


    get selectedUserTasks() {
        return this.tasksService.getUserTasks(this.userId);
    }

    onStartAddTask() {
        this.isAddingTask = true;
    }

    onCloseAddTask() {
        this.isAddingTask = false;
    }

}
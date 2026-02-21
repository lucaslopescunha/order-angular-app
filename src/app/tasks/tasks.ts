import { Component, Input, signal } from "@angular/core";
import { TaskComponent } from "./task/task";
import { NewTaskComponent } from "./new-task/new-task";
import { TasksService } from "./tasks.service";
import { Task } from "./task/task.model";

@Component({
    selector:'app-tasks',
    styleUrl: './tasks.css',
    imports: [TaskComponent, NewTaskComponent],
    templateUrl: './tasks.html'
})
export class TasksComponent {
    @Input({ required: true }) name!: string;    
    @Input({ required: true }) userId!: string;
    isAddingTask = false;
    

    constructor(private tasksService: TasksService) { }

    selectedUserTasks = () => this.tasksService.getUserTasks(this.userId);


    onStartAddTask() {
        this.isAddingTask = true;
    }

    onCloseAddTask() {
        this.isAddingTask = false;
    }

}
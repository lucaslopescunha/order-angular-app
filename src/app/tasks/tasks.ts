import { Component, Input } from "@angular/core";
import { TaskComponent } from "./task/task";
import { DUMMY_TASKS } from '../dummy-tasks';
import { NewTaskComponent } from "./new-task/new-task";
import { NewTaskData } from "./task/task.model";
import { TasksService } from "./tasks.service";

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
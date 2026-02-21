import { Component, EventEmitter, inject, Input, output, Output } from '@angular/core';
import { Task } from './task.model';
import { CardComponent } from "../../shared/card/card";
import { DatePipe } from '@angular/common';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',  
  templateUrl: './task.html',
  styleUrl: './task.css',
  imports: [CardComponent, DatePipe],
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;
  private tasksService = inject(TasksService);
  complete = output<string>();

  onCompleteTask() {
    this.tasksService.removeTask(this.task.id);
  }
  
}

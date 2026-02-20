import { NgModule } from "@angular/core";
import { TasksComponent } from "./tasks.component";
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { SharedModule } from "../shared/shared.module";
import { CommonModule, DatePipe } from "@angular/common";
import { FormsModule } from "@angular/forms";

@NgModule( {
    declarations: [TasksComponent, TaskComponent, NewTaskComponent],
    exports: [TasksComponent],// o uníco que é chamado pelo app component
    imports: [CommonModule,  // date pipe
        FormsModule, // ngModule
        SharedModule ] // every modules has to work on its own. Date pipe needs this
})
export class TasksModule {}
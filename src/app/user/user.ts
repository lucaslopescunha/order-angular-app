import { Component, EventEmitter, Input,  output,  Output, signal } from "@angular/core";
import { User } from "./user.model";
import { CardComponent } from "../shared/card/card";

@Component({
    standalone: true, //default is default
    selector: 'app-user',
    styleUrl: './user.css',
    templateUrl: './user.html',
    imports: [CardComponent]
})
export class UserComponent {

    @Input({ required: true }) user!: User;
    @Input({ required: true }) selected!: boolean;
    select = output<string>();

    get imagePath() {
        return 'assets/users/' + this.user.avatar;
    }

    onSelectUser() {
        this.select.emit(this.user.id);
    }
}


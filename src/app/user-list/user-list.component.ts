import { Component } from '@angular/core';

@Component({
	selector: 'app-user-list',
	imports: [],
	templateUrl: './user-list.component.html',
	styleUrl: './user-list.component.css'
})
export class UserListComponent {
	users_list: string[] = ["artur", "adam", "egor"];

}

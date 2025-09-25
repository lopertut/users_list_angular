import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrl: './app.component.css',
})
export class AppComponent {
	users: string[] = ["artur", "andrei", "sasha"];
	filteredUsers: string[] = [];
	isSearching: boolean = false;
	addUser() {
		const name = (<HTMLInputElement>document.getElementById("input")).value;
		this.users.push(name);
	}

	deleteUser(index: number) {
		this.users.splice(index, 1);
	}

	searchUser() {
		const searchInput = (<HTMLInputElement>document.getElementById("search")).value.toLowerCase();
		const list = document.getElementById("list");

		if (searchInput == "") {
			this.isSearching = false;
			this.filteredUsers = [];
			if (list?.innerHTML) {
				list.innerHTML = "";
			}
		} else {
			this.isSearching = true;
			this.filteredUsers = this.users.filter(name => name.includes(searchInput));
		}
		console.log(this.isSearching)
	}
}

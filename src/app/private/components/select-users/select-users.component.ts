import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, switchMap, tap } from 'rxjs';
import { IUser } from 'src/app/models/user.interface';
import {
  ISignOnService,
  SignOnToken,
} from 'src/app/public/services/iservices/sign-on.service.interface';

@Component({
  selector: 'app-select-users',
  templateUrl: './select-users.component.html',
  styleUrls: ['./select-users.component.scss'],
})
export class SelectUsersComponent {
  @Input() users: IUser[] = [];
  @Output() addUser: EventEmitter<IUser> = new EventEmitter<IUser>();
  @Output() removeUser: EventEmitter<IUser> = new EventEmitter<IUser>();

  searchUsername = new FormControl();
  filteredUsers: IUser[] = [];
  selectedUser: IUser | null = null;

  constructor(@Inject(SignOnToken) private signOnService: ISignOnService) {}

  ngOnInit(): void {
    this.searchUsername.valueChanges
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        switchMap((username: string) =>
          this.signOnService
            .findByUsername(username)
            .pipe(tap((users: IUser[]) => (this.filteredUsers = users)))
        )
      )
      .subscribe();
  }

  addUserToForm() {
    this.addUser.emit(this.selectedUser ?? {});
    this.filteredUsers = [];
    this.selectedUser = null;
    this.searchUsername.setValue(null);
  }

  removeUserFromForm(user: IUser) {
    this.removeUser.emit(user);
  }

  setSelectedUser(user: IUser) {
    this.selectedUser = user;
  }

  displayFn(user: IUser) {
    if (user && user.username) {
      return user.username;
    } else {
      return '';
    }
  }
}

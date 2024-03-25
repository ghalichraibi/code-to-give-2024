import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class UserService {
  private user: string;

  get username(): string {
    return this.user;
  }

  get isLoggedIn(): boolean {
    return !!this.user;
  }

  setUsernameFromEmail(email: string): void {
    let user = email.split("@")[0];
    user = user.charAt(0).toUpperCase() + user.slice(1);
    this.setUsername(user);
  }

  setUsername(username: string): void {
    this.user = username;
  }
}

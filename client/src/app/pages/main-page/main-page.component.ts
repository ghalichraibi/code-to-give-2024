import { Component, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";
import { Router } from "@angular/router";
import { UserService } from "@app/services/user.service";

const REALLY_SECRET_PASSWORD = "password";

@Component({
  selector: "app-main-page",
  templateUrl: "./main-page.component.html",
  styleUrls: ["./main-page.component.scss"],
})
export class MainPageComponent implements OnDestroy {
  selectedOption: string = "caregiver";
  email: string = "";
  password: string = "";
  errorMessage: string = "";

  private loginSubscription: Subscription | null = null;

  constructor(
    private router: Router,
    private userService: UserService
  ) {}

  onLogin() {
    if (!this.isValidCredentials(this.email, this.password)) {
      this.errorMessage = "The credentials you entered are incorrect.";
      return;
    }

    this.userService.setUsernameFromEmail(this.email);

    switch (this.selectedOption) {
      case "caregiver":
        this.router.navigate(["/caregiver"]);
        break;
      case "resident":
        this.router.navigate(["/resident"]);
        break;
    }
  }

  ngOnDestroy() {
    this.loginSubscription?.unsubscribe();
  }

  isValidCredentials(email: string, password: string): boolean {
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isValidPassword = password === REALLY_SECRET_PASSWORD;
    return isValidEmail && isValidPassword;
  }
}

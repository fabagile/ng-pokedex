import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styles: [],
})
export class LoginComponent implements OnInit {
  message = "vous êtes déconnecté";
  name: string;
  password: string;
  auth: AuthService;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.auth = this.authService;
  }

  setMessage() {
    if (this.auth.isLoggedIn) {
      this.message = "vous êtes connecté";
    } else {
      this.message = "Identifiant ou MDP incorract";
    }
  }

  login() {
    this.message = "tentative de connexion en cours...";
    this.auth
      .login(this.name, this.password)
      .subscribe((isLoggedIn: boolean) => {
        this.setMessage();
        if (isLoggedIn) {
          this.router.navigate(["/pokemons"]);
        } else {
          this.name = "";
          this.password = "";
          this.router.navigate(["/login"]);
        }
      });
  }
  logout() {
    this.auth.logout();
  }
}

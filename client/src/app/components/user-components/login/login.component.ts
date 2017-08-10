import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SessionService } from '../../../services/session.service';

@Component({
    selector: 'app-login',
    moduleId: module.id,
    templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
    model: any = {};
    error = '';

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private session: SessionService) { }

    ngOnInit() {
        // get return url from route parameters or default to '/'
        //this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    login(form) {
        this.session.login(form.value.username, form.value.password)
            .subscribe(
                data => {
                    this.router.navigate(['/profile']);
                },
                error => {
                    this.error = error;
                });
    }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
	selector: 'app-about-us',
	templateUrl: './about-us.component.html',
	styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

	count: number;

	constructor(private route: ActivatedRoute, private router: Router) {}

	ngOnInit() {
	}

	toHome() {
		this.router.navigate(['']);
	}

}

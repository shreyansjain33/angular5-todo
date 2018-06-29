import { Component, OnInit } from '@angular/core';
import { group, trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
	animations: [
		trigger('itemc', [
			transition('* => *', [
				query(':enter', style({ opacity: 0 }), { optional: true }),
				query(':enter', stagger('300ms', [
					animate('.6s ease-in-out', keyframes([
						style({ opacity: 0 }),
						style({ opacity: .5 }),
						style({ opacity: 1 })
					]))]), { optional: true }),
				query(':leave', stagger('300ms', [
					animate('.6s ease-in-out', keyframes([
						style({ opacity: 1 }),
						style({ opacity: .5 }),
						style({ opacity: 0 })
					]))]), { optional: true })
			])
		])
	]
})

export class HomeComponent implements OnInit {

	count: number;
	goalText: string;
	items = [];

	constructor() { }

	updateCount() {
		this.count = this.items.length;
	}

	addItem() {
		this.items.push(this.goalText);
		this.goalText = "";
		this.updateCount();
	}

	removeItem(i) {
		this.items.splice(i, 1);
		this.updateCount();
	}

	ngOnInit() {
		this.updateCount();
	}

}




import { Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';



export const ComponentsRoutes: Routes = [
	{
		path: '',
		children: [
			{
				path: 'home',
				component: HomeComponent,
				data: {
					title: 'Home',
					urls: [
						{ title: 'Dashboard', url: '/dashboard' },
						{ title: 'ngComponent' },
						{ title: 'Home' }
					]
				}
			}
			// {
			// 	path: 'card',
			// 	component: CardsComponent,
			// 	data: {
			// 		title: 'Cards',
			// 		urls: [
			// 			{ title: 'Dashboard', url: '/dashboard' },
			// 			{ title: 'ngComponent' },
			// 			{ title: 'Cards' }
			// 		]
			// 	}
			// }
		]
	}
];

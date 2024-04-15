import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DailyTaskComponent } from './daily-task/daily-task.component';

export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent,
    },
    {
        path: 'daily-task',
        loadComponent: () => import('./daily-task/daily-task.component').then((c) => c.DailyTaskComponent),
    }
];

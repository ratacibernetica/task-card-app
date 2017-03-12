import { Component } from '@angular/core';

import { Task } from './model/task';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    styleUrls: [ 'app.component.css' ]
})

export class AppComponent {
    private tasks = [
        new Task(
            "Learn to code",
            false
        ),
        new Task(
            "Walk the line",
            false
        )
    ]
    private currentTask = new Task(null, false);
} 
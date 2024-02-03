import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatButtonModule,
    FormsModule,
    MatIconModule,
    MatDialogModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'todo-list';
  newTaskInput: string = '';
  tasks: string[] = [];

  addNewTask() {
    if (this.newTaskInput != '') {
      this.tasks.push(this.newTaskInput);
      this.newTaskInput = '';
    }
  }
  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }
  editTask(index: number) {
    let result = prompt('Lütfen yeni değeri giriniz:', this.tasks[index]);
    //bunu prompt yerine dialog ile yap pop-up şeklinde
    if (result !== null) {
      this.tasks[index] = result;
    }
  }
}

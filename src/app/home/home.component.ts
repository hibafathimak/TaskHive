import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  userName: String = '';
  isSidebarOpen: boolean = false;
  isDropdownOpen: boolean = false;
  isModalOpen: boolean = false;
  selectedOption: string | null = null;
  mode: 'add' | 'edit' = 'add';
  taskIndex: number | null = null;
  tasks: any[] = [];

  task = {
    id: '',
    title: '',
    description: '',
    deadline: '',
    priority: 'Medium',
    status: 'Not Started',
  };

  constructor() {
    this.getTasks();
  }

  ngOnInit() {
    const user = sessionStorage.getItem('user');
    this.userName = user ? JSON.parse(user).username : '';
  }

  getTasks() {
    this.tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
  }

  toggleSidebar(): void {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  selectOption(option: string) {
    this.selectedOption = option;
    this.isDropdownOpen = false;
  }

  openmodal(mode: 'add' | 'edit', task?: any, index?: number) {
    this.isModalOpen = true;
    this.mode = mode;

    if (mode === 'edit' && task) {
      this.task = { ...task }; 
      this.taskIndex = index ?? null;
    } else {
      this.resetTask();
    }
  }

  closemodal() {
    this.isModalOpen = false;
    this.taskIndex = null; 
  }

  submitTask() {
    if (!this.task.title || !this.task.description) {
      console.error('Title and description are required.');
      return;
    }

    let tasks = JSON.parse(localStorage.getItem('tasks') || '[]');

    if (this.mode === 'add') {
      this.task.id = Date.now().toString(); 
      tasks.push(this.task);
    } else if (this.mode === 'edit' && this.taskIndex !== null) {
      tasks[this.taskIndex] = { ...this.task };
    }

    localStorage.setItem('tasks', JSON.stringify(tasks));
    console.log('Task Submitted:', this.task);
    this.closemodal();
    this.resetTask();
  }

  resetTask() {
    this.task = {
      id: '',
      title: '',
      description: '',
      deadline: '',
      priority: 'Medium',
      status: 'Not Started',
    };
  }
}

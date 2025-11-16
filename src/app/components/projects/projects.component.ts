import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Expense Tracker (Angular + Firebase)',
      description: 'A personal finance tracker with real-time sync, authentication, and data visualization using Firebase and Angular.',
      image: 'assets/projects/expenseTracker.png',
      codeLink: 'https://github.com/nandakishore-k/expense-tracker',
      liveLink: 'https://expense-tracker-demo.web.app'
    },
    {
      title: 'Money Management Mobile app (Flutter + sqlite)',
      description: 'Automatic SMS-based transaction detection with unique IDs to avoid duplicates,Dynamic category management with charts,Daily and monthly expense summaries,Manual entry for cash transfers,Visual insights: see top spending categories at a glance',
      image: 'assets/projects/mrMoney.jpeg',
      codeLink: 'https://github.com/nandakishore-k/expense-tracker',
      liveLink: 'https://expense-tracker-demo.web.app'
    },
    {
      title: 'OptiType — Vision Controlled Keyboard',
      description: 'An assistive typing interface using eye gaze and blink detection, integrated with text-to-speech output.',
      image: 'assets/projects/optitype.png',
      codeLink: 'https://github.com/nandakishore-k/optitype',
      liveLink: ''
    },
    {
      title: 'Portfolio Website',
      description: 'Personal website showcasing my work, skills, and contact information with a custom theme and responsive design.',
      image: 'assets/projects/portfolio.png',
      codeLink: 'https://github.com/nandakishore-k/portfolio',
      liveLink: 'https://nandakishore.dev'
    }
  ];
}

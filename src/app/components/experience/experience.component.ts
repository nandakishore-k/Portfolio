import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
})
export class ExperienceComponent {
  experiences = [
    {
      role: 'Full Stack Developer Intern',
      company: 'Xyvin Technologies, Kochi',
      period: 'Sept 2024 – (Ongoing)',
      description:
        'Developed dynamic user interfaces using Angular and integrated REST APIs to enhance data interactivity and UX.',
    },
    {
      role: 'Angular Developer Intern',
      company: 'Nest Digital, Kochi',
      period: ' Feb 2025 ',
      description:
        'Led a team of 8 to build web-based tools for campus events, improving management efficiency and student engagement.',
    },
    {
      role: 'Unity Developer Intern',
      company: 'XR Horizon, Kochi',
      period: 'Feb 2025',
      description:
        'Conducted a hands-on Git and Linux workshop for 1st-year students, covering command-line and version control fundamentals.',
    },
    {
      role: 'Web Developer Intern',
      company: 'Camio Infotech, Kochi',
      period: 'Feb 2025',
      description:
        'Web development usin',
    },
  ];
}

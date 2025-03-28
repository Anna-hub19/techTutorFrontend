import { Component } from '@angular/core';

@Component({
  selector: 'app-learning-topics',
  templateUrl: './learning-topics.component.html',
  styleUrls: ['./learning-topics.component.css']
})
export class LearningTopicsComponent {
  topics = [
    { title: 'Programming Logic', description: 'Learn the basics of logic and algorithms.', icon: '🧠' },
    { title: 'JavaScript', description: 'Master the most popular language on the web.', icon: '📜' },
    { title: 'C#', description: 'Explore the power of C# to build robust applications.', icon: '⚙️' },
    { title: 'Database', description: 'Understand SQL and how to manage data efficiently.', icon: '🗄️' }
  ];
}

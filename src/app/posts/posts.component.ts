import {Component} from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  message = 'no say hallo('

  sayHello() {
    this.message = 'hello!'
  }

  sayBye() {
    this.message = 'bue!'
  }
}

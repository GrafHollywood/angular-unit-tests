import {TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {PostsComponent} from "./posts/posts.component";

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        PostsComponent, AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should create posts list', () => {
    const fixture = TestBed.createComponent(PostsComponent);
    const postsComponent = fixture.componentInstance;
    expect(postsComponent).toBeTruthy();
  });

  it(`should have as title 'Posts App'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Posts App');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content h1')?.textContent).toContain('Posts App is running!');
  });
});

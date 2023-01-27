import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PostsComponent} from './posts.component';

describe('PostsComponent', () => {
  let component: PostsComponent;
  let fixture: ComponentFixture<PostsComponent>;
  let h1: HTMLElement

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostsComponent]
    })
      .compileComponents();
    fixture = TestBed.createComponent(PostsComponent);
    component = fixture.componentInstance;
    h1 = fixture.nativeElement.querySelector('h1');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`shouldn't say hello in start`, () => {
    const message = component.message;
    const expectedMessage = 'no say hallo(';
    expect(message).toBe(expectedMessage)
    expect(h1.textContent).toContain(expectedMessage)
  })

  it(`should say hello`, () => {
    component.sayHello();
    fixture.detectChanges()
    const message = component.message;
    const expectedMessage = 'hello!';
    expect(message).toBe(expectedMessage)
    expect(h1.textContent).toContain(expectedMessage)
  })

  it(`should say bye`, () => {
    component.sayBye();
    fixture.detectChanges()
    const message = component.message;
    const expectedMessage = 'bue!';
    expect(message).toBe(expectedMessage)
    expect(h1.textContent).toContain(expectedMessage)
  })
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsComponent } from './posts.component';

describe('PostsComponent', () => {
  let component: PostsComponent;
  let fixture: ComponentFixture<PostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostsComponent ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(PostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`shouldn't say hello in start`, () => {
    const message = component.message;
    expect(message).toBe('no say hallo(')
  })

  it(`should say hello`, () => {
    component.sayHello();
    const message = component.message;
    expect(message).toBe('hello!')
  })

  it(`should say bye`, () => {
    component.sayBye();
    const message = component.message;
    expect(message).toBe('bue!')
  })
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { provideRouter } from '@angular/router';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
    let component: AppComponent;
    let fixture: ComponentFixture<AppComponent>;
    let debugEl: DebugElement;
  
    beforeEach(async () => {
      await TestBed.configureTestingModule({
        providers: [ provideRouter([])]
      })
      .compileComponents();
  
      fixture = TestBed.createComponent(AppComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
      debugEl = fixture.debugElement;
    });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'Spec-tacular!' title`, () => {
    const a = debugEl.query(By.css('h1')).nativeElement;
    expect(a.textContent).toContain(component.title);
  });

  it('should render title', () => {
    const a = component.title;
    expect(a).toBeTruthy;
  });
});

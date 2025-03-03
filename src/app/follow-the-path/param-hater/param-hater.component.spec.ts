import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ParamHaterComponent } from "./param-hater.component";
import { DebugElement } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

describe('ParamHaterComponent', () => {
  let component: ParamHaterComponent;
  let fixture: ComponentFixture<ParamHaterComponent>;
  let debugEl: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: { params: { id: '123' } }
          }
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParamHaterComponent);

    await fixture.whenStable();
    fixture.detectChanges();
    component = fixture.componentInstance;
    debugEl = fixture.debugElement;
  });
  //Use RouterTestingHarness
  it('should display advice id', () => {
    expect(component.id).toBe(123);
  });
});

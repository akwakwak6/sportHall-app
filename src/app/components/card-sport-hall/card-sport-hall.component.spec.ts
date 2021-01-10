import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CardSportHallComponent } from './card-sport-hall.component';

describe('CardSportHallComponent', () => {
  let component: CardSportHallComponent;
  let fixture: ComponentFixture<CardSportHallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardSportHallComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CardSportHallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

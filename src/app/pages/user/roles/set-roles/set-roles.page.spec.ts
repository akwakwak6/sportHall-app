import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SetRolesPage } from './set-roles.page';

describe('SetRolesPage', () => {
  let component: SetRolesPage;
  let fixture: ComponentFixture<SetRolesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetRolesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SetRolesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

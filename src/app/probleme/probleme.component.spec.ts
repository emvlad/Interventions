import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemeComponent } from './probleme.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('ProblemeComponent', () => {
  let component: ProblemeComponent;
  let fixture: ComponentFixture<ProblemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[ReactiveFormsModule], //ajouté
      declarations: [ ProblemeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProblemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
   expect(component).toBeTruthy();
//   });
// it('champ nom du probleme 5 caractères',() =>{

//   let zone = component.problemeForm.controls['nomProbleme'];
//   zone.setValue('a'.repeat(5));

// expect(zone.valid).toBeTruthy();
// });
 
// it('champ nom du probleme 5 caractères',() =>{

//   let errors ={};
//   let zone = component.problemeForm.controls['nomProbleme'];
//   zone.setValue('a'.repeat(2));
//   errors = zone.errors || {};

// expect(errors['minlength']).toBeTruthy();
 });


});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackComponent } from './feedback.component';

// describe('FeedbackComponent', () => {
//   let component: FeedbackComponent;
//   let fixture: ComponentFixture<FeedbackComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [ FeedbackComponent ]
//     })
//     .compileComponents();
//   });

//   beforeEach(() => {
//     fixture = TestBed.createComponent(FeedbackComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
function validateForm() {
  var radioButtons = document.getElementsByName("commentRating");
  var radioChecked = false;

  for (var i = 0; i < radioButtons.length; i++) {
    if (radioButtons[i].ariaChecked {
      radioChecked = true;
      break;
    }
  }

  if (!radioChecked) {
    alert("Please select a rating");
    return false;
  }

  // Add more validation logic if needed

  return true;
}

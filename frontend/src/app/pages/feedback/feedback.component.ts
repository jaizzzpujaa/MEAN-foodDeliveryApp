// feedback.component.ts

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-feedback',
  templateUrl: 'feedback.component.html',
  styleUrls: ['feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  feedbackForm!: FormGroup;
  isSubmitted = false;
returnUrl: any;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.feedbackForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      comment: ['', Validators.required],
      address: [''],
      commentRating: ['']
    });
  }

  submit(): void {
    this.isSubmitted = true;

    // Perform actions with form data here
    if (this.feedbackForm.valid) {
      // Example: Send data to the server
      console.log(this.feedbackForm.value);
      // You can add your HTTP request logic here
    }
  }
}

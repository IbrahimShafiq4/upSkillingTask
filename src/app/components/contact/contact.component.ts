import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { User } from './user';
import { ContactService } from './contact.service';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {

  private ContactService = inject(ContactService);
  private fb = inject(FormBuilder);
  private toastr = inject(ToastrService);

  userForm!: FormGroup;
  userData: User = { name: '', email: '', phone: '' };

  ngOnInit(): void {
    this.userForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      name: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
      phone: [null, [Validators.required, 
        Validators.maxLength(11), 
        Validators.pattern(/^(\+201|01|00201)[0-2,5]{1}[0-9]{8}/)]]
    })
  }

  onSubmit() {
    this.userData = {
      name: this.userForm.get('name')?.value,
      email: this.userForm.get('email')?.value,
      phone: this.userForm.get('phone')?.value
    }

    this.ContactService.sendUserData(this.userData).subscribe((value) => {
      this.toastr.success(`Message Sent Successfully`, 'Success')
    })
  }
}

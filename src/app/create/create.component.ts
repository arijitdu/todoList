import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'todo-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  todoForm = this.fb.group({
    todoName: ['', [Validators.required, Validators.minLength(3)]],
  });
  constructor(
    public dialogRef: MatDialogRef<CreateComponent>,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.todoForm.valueChanges.subscribe((data) => {
      console.log(data)
    })
  }

  onNoClick() {
    this.dialogRef.close()
  }

  onSubmit() {
    if (this.todoForm.valid) {
      this.dialogRef.close(this.todoForm.controls.todoName.value)
    }
  }
}

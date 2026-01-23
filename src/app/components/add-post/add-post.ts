import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { DataService, Post } from '../../services/data';

@Component({
  selector: 'add-post',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './add-post.html',
  styleUrl: './add-post.scss',
})

export class AddPost {

  postForm!: FormGroup;
  imagePreview: string | null = null;

  constructor(
    private fb: FormBuilder,
    private dataService: DataService
  ) {}

  ngOnInit() {
    this.postForm = this.fb.group({
      text: ['', Validators.required],
      image: ['']
    });
  }

  onImageSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (!input.files || input.files.length === 0) return;

    const file = input.files[0];

    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string;
      this.postForm.patchValue({ image: this.imagePreview });
    };
    reader.readAsDataURL(file);
  }

  onSubmit() {
    if (this.postForm.invalid) return;

    const nextNumber = this.dataService.getCount() + 1;

    const newPost: Post = {
      title: `Post ${nextNumber}`, 
      text: this.postForm.value.text,
      image: this.postForm.value.image,
      id: crypto.randomUUID()
    };

    this.dataService.addPost(newPost);

    this.postForm.reset();
    this.imagePreview = null;
  }

  showAddPost = false;

  toggleAddPost() {
    this.showAddPost = !this.showAddPost;
  }
}


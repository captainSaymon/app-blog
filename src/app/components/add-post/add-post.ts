import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { DataService, Post } from '../../services/data-service';

@Component({
  selector: 'add-post',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-post.html',
  styleUrls: ['./add-post.scss'],
})
export class AddPost implements OnInit {

  postForm!: FormGroup;
  imagePreview: string | null = null;
  showAddPost = false;

  constructor(private fb: FormBuilder, private dataService: DataService) {}

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

    const newPost: Post = {
      title: `Post 0`,  // stały numer
      text: this.postForm.value.text,
      image: this.postForm.value.image,
      likes: 0
    };

    this.dataService.addPost("1", newPost).subscribe({
      next: () => {
        console.log('Post dodany');
        this.postForm.reset();
        this.imagePreview = null;
        this.showAddPost = false;
      },
      error: (err) => console.error('Błąd dodawania posta', err)
    });
  }

  toggleAddPost() {
    this.showAddPost = !this.showAddPost;
  }
}

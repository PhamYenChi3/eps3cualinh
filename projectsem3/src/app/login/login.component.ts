import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string;
  password: string;

  constructor(private http: HttpClient) {}

  onSubmit() {
    const url = 'http://example.com/login';
    const data = { username: this.username, password: this.password };
    this.http.post(url, data).subscribe(
      response => {
        // Xử lý kết quả trả về khi đăng nhập thành công
      },
      error => {
        // Xử lý lỗi khi đăng nhập thất bại
      }
    );
  }
}
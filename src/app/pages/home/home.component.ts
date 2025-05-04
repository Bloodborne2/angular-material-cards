import { Component } from '@angular/core';
import { CardItemComponent } from '../../shared/card-item/card-item.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardItemComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  titulo: string = 'Bem-vindos!';
  imagens: string[] = [
    'assets/teste.jpg',
    'assets/images.jpg',
    'assets/download.jpg',
    'assets/testeDois.jpg'
  ];
}


import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
})
export class NewsComponent implements OnInit {
  newsList!: any;
  constructor(private news: NewsService) {
    this.news.getNews().subscribe((data: any) => {
      this.newsList = data.articles;
      console.log(this.newsList);
    });
  }

  ngOnInit(): void {}
}


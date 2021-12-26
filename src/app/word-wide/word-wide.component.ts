import { Component, OnInit } from '@angular/core';
import { ListService } from '../service/list.service';

@Component({
  selector: 'app-word-wide',
  templateUrl: './word-wide.component.html',
  styleUrls: ['./word-wide.component.css']
})
export class WordWideComponent implements OnInit {

  wordWide!: any;

  constructor(private service: ListService) { 
    this.service.getWordWide().subscribe((res:any)=> {
      this.wordWide = res
      console.log(res)
    })
  }

  ngOnInit(): void {
 
  }

}

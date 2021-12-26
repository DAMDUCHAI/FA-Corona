import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ListService } from '../service/list.service';
import { LineChartService } from './../line-chart.service';
@Component({
  selector: 'app-regional',
  templateUrl: './regional.component.html',
  styleUrls: ['./regional.component.css']
})
export class RegionalComponent implements OnInit {
  seachStr!:any;
  pre!: latest[];
  search!: latest[];
  selectedCode="VN"; 

  constructor(private service: ListService,private chart: LineChartService) {
    this.service.getRegionalList().subscribe((res:any)=> {
      this.pre = res
      console.log(res)
    })

    this.service.getRegionalByIso2(this.selectedCode).subscribe((res:any)=> {
      this.search = res
      console.log(res)
    })
  }



 
  ngOnInit(): void {
    console.log(this.selectedCode);
  }
  

  
  handleSelect(event: any){
    this.selectedCode = event.target.value;
     
    this.service.getRegionalByIso2(this.selectedCode).subscribe((res:any)=> {
      this.search = res
    
    })
  }



  }




import { Component, OnInit,ViewChild ,ElementRef } from '@angular/core';
import * as XLSX from 'xlsx'; 
import { ListService } from '../service/list.service';
@Component({
  selector: 'app-regional-detail',
  templateUrl: './regional-detail.component.html',
  styleUrls: ['./regional-detail.component.css']
})
export class RegionalDetailComponent implements OnInit {
 
  constructor(private service: ListService) {
  }

  ngOnInit(): void {
  }
err:string="No result for search !";
iso2!:any;
listProvince!:any[];
nameCountry!:any;
isShow:boolean=false;
search:any='';
p: number = 1;
fileName!:string;
  searchRegional(strString:any) {
  this.service.getRegionalList().subscribe(
    (res:any)=> {
    res=res.filter((countryregion:any)=>countryregion.countryregion.toUpperCase()==strString.toUpperCase());
    this.iso2=res[0].countrycode.iso2;
    this.nameCountry=res[0].countryregion;
    this.fileName=`${this.nameCountry}.xlsx`
    this.isShow=true;
      this.service.getRegionalDetail(this.iso2).subscribe(
    (res:any)=> {
   this.listProvince=res;
console.log( this.listProvince);
  }
  
  ) 

  },
  (err: any)=>{
    
    this.isShow=false;
  }
  
  ) 




}
  



ExportTOExcel(){

    const ws: XLSX.WorkSheet =XLSX.utils.json_to_sheet(this.listProvince);
 
    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
 
    /* save to file */  
    XLSX.writeFile(wb, this.fileName);




}
}
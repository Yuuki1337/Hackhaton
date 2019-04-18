import { Component, OnInit } from '@angular/core';
import { Operator } from 'rxjs'
import { filter, debounce, switchMap, map } from 'rxjs/operators'
import { EasterApiService } from '../easter-api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Chart } from 'chart.js';



@Component({
  selector: 'app-cours',
  templateUrl: './cours.component.html',
  styleUrls: ['./cours.component.scss']
})
export class CoursComponent implements OnInit {


public interval 
public timestamp
public milk
public chocolates
public eggs 
public date
public allEggs 



  constructor(private activatedRoute:ActivatedRoute,private router:Router, private easterEgg: EasterApiService) { }

  ngOnInit() {
   

      this.timestamp = new Date();
      this.interval = 1000


      this.easterEgg.getMilk(this.timestamp, this.interval).subscribe(result => {
        this.milk=result
      });
      this.easterEgg.getChocolate(this.timestamp, this.interval).subscribe(result => {
        this.chocolates = result;
      });
      this.easterEgg.getEggs(this.timestamp, this.interval).subscribe(result => {
        this.eggs = result;
      
  });
}


  }

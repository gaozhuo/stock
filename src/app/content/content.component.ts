import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import 'rxjs'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  title: string;
  desc: string;

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.router.events
      .filter(event => event instanceof NavigationEnd)
      .subscribe((event: NavigationEnd) => {
        if (event.url == "/dashboard") {
          this.title = "首页"
          this.desc = "";
        } else if (event.url == "/stock") {
          this.title = "股票信息管理";
          this.desc = "进行股票信息的增删改查";
        }
      })
  }


}

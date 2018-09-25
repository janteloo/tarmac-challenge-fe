import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../../service/user-service.service';
import { PageEvent } from '@angular/material';
import { FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material';


@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  private queryFieldName: FormControl = new FormControl();
  private queryFieldRole: FormControl = new FormControl();
  private workers: Array<any> = [];
  private page: any = { totalElements: 0 };

  public dataSource: any;    
    // MatPaginator Output

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private userService: UserService) { }
  
  ngOnInit() {
    this.listWorkers(0);
    this.queryFieldName.valueChanges.subscribe(queryFieldName => 
      this.userService.findWorkersByName(queryFieldName).subscribe((data: Array<any>) => {
        this.setData(data);
       })
    );

    this.queryFieldRole.valueChanges.subscribe(queryFieldRole => 
      this.userService.findWorkersByRole(queryFieldRole).subscribe((data: Array<any>) => {
        this.setData(data);
       })
    );

  }

  ngAfterInit() {
    this.dataSource.paginator = this.paginator;
  }

  public getWorkers(pageEvent: PageEvent) : void {
    this.listWorkers(pageEvent.pageIndex);
  }

  private listWorkers(currentPage: number) : void {
    this.userService.getWorkers(currentPage).subscribe((data: Array<any>) => {
      this.setData(data);
    })
  }

  private setData(data: Array<any>) {
    this.workers = data['_embedded']['workers'];
    this.page = data['page'];
    this.paginator.pageIndex = this.page.number;
  }

  public mouseHovering(worker: any) : void {
    worker.mouseOver = true;
  }

  public mouseLeft(worker: any) {
    worker.mouseOver = false;
  }


}

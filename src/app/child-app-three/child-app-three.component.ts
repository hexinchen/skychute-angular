import { Component, OnDestroy, OnInit } from '@angular/core';
import { HelperService } from '../helper.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-child-app-three',
  templateUrl: './child-app-three.component.html',
  styleUrls: ['./child-app-three.component.css']
})

export class ChildAppThreeComponent implements OnInit, OnDestroy {
  inputText: string;
  subscription: Subscription;

  constructor(private helperService: HelperService) {}

  ngOnInit(): void{
    this.subscription = this.helperService.getHelperInput().subscribe(text => this.inputText = text);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

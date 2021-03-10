import { Component, OnDestroy, OnInit } from '@angular/core';
import { HelperService } from '../helper.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-parent-app-four',
  templateUrl: './parent-app-four.component.html',
  styleUrls: ['./parent-app-four.component.css']
})
export class ParentAppFourComponent implements OnInit, OnDestroy {
  inputText: string;
  subscription: Subscription;

  constructor(private helperService: HelperService) { }

  ngOnInit(): void {
    this.subscription = this.helperService.getHelperInput().subscribe((text) => {
      this.inputText = text;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}

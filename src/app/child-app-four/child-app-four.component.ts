import { Component } from '@angular/core';
import { HelperService } from '../helper.service';

@Component({
  selector: 'app-child-app-four',
  templateUrl: './child-app-four.component.html',
  styleUrls: ['./child-app-four.component.css']
})
export class ChildAppFourComponent {
  constructor(private helperService: HelperService) { }
  inputUpdated(text: string): void {
    this.helperService.setHelperInput(text);
  }
}

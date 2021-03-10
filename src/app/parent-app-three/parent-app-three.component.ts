import { Component } from '@angular/core';
import { HelperService } from '../helper.service';

@Component({
  selector: 'app-parent-app-three',
  templateUrl: './parent-app-three.component.html',
  styleUrls: ['./parent-app-three.component.css']
})
export class ParentAppThreeComponent {
  constructor(private helperService: HelperService) {}

  inputUpdated(text: string): void {
    this.helperService.setHelperInput(text);
  }
}


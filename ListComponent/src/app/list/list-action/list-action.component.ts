import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-list-action',
  templateUrl: './list-action.component.html',
  styleUrls: ['./list-action.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListActionComponent implements OnInit {
  @Input() icon: string;
  @Input() text: string;
  @Input() color: string;
  constructor() { }

  ngOnInit(): void {
  }

}

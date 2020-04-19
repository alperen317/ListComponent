import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  selectedItems: any;

  events: any[] = [];
  items = [
    { id: 0, name: 'Title 1' },
    { id: 1, name: 'Titel 2' },
    { id: 2, name: 'Title 3' },
  ];
  onChange($event) {
    this.events.push({ name: '(change)', value: $event });
    console.log("onchange", this.selectedItems);
  }

  onFocus($event: Event) {
    this.events.push({ name: '(focus)', value: $event });
  }

  onBlur($event: Event) {
    this.events.push({ name: '(blur)', value: $event });
  }

  onOpen() {
    this.events.push({ name: '(open)', value: null });
  }

  onClose() {
    this.events.push({ name: '(close)', value: null });
  }

  onAdd($event) {
    this.events.push({ name: '(add)', value: $event });
    console.log(this.selectedItems);
  }

  onRemove($event) {
    this.events.push({ name: '(remove)', value: $event });
    console.log("remove", this.selectedItems);

  }

  onClear() {
    this.events.push({ name: '(clear)', value: null });
  }

  onScrollToEnd($event) {
    this.events.push({ name: '(scrollToEnd)', value: $event });
  }

  onSearch($event) {
    this.events.push({ name: '(search)', value: $event });
  }


  title = 'ListComponent';
  size = 5;
  loading = false;


}


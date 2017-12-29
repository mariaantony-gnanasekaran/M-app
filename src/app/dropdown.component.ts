import { Component } from '@angular/core';
@Component({
    selector: 'component',
    template: `<div class= "ej2component"><ej-dropdownlist class="resize"  [dataSource]='data' placeholder = 'Select a game'></ej-dropdownlist></div>`,
})
export class ej2DropdownComponent {

    public data: Object = ['Snooker', 'Tennis', 'Cricket', 'Football', 'Rugby']

}

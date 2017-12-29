import { Component } from '@angular/core';
@Component({
    selector: 'component',
    template: `<div class= "ej2component"><ej-toolbar> class="resize"
    <e-items>
       <e-item text='Cut'></e-item>
       <e-item text='Copy'></e-item>
       <e-item text='Paste'></e-item>
       <e-item type='Separator'></e-item>
       <e-item text='Bold'></e-item>
       <e-item text='Italic'></e-item>
       <e-item text='Underline'></e-item>
    </e-items>
  </ej-toolbar></div>`,
})
export class ej2ToolbarComponent {


}

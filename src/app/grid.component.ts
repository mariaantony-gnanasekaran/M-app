import { Component } from '@angular/core';
@Component({
    selector: 'component',
    template: `<div class= "ej2component"><ej-grid class="resize" [dataSource]='data'></ej-grid></div>`,
})
export class ej2GridComponent {
public data = [
    { OrderID: 10248, CustomerID: 'VINET', EmployeeID: 5 },
    { OrderID: 10249, CustomerID: 'TOMSP', EmployeeID: 6 },
    { OrderID: 10250, CustomerID: 'HANAR', EmployeeID: 4 }];

}

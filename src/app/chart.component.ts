import { Component } from '@angular/core';
@Component({
    selector: 'component',
    template: `<div class= "PieChart"><ej-accumulationchart [id] = "id" >
    <e-accumulation-series-collection>
        <e-accumulation-series [dataSource]='chartData' xName='x' yName='y'></e-accumulation-series>
    </e-accumulation-series-collection>
</ej-accumulationchart></div>`,
styles : [`ej-accumulationchart { display: block; height: 200px;}`]
})
export class ej2ChartComponent {
    public id:string = "chart" + Math.random();
    public chartData = [
        { x: 'Jan', y: 3, text: 'Jan: 3' }, { x: 'Feb', y: 3.5, text: 'Feb: 3.5' },
        { x: 'Mar', y: 7, text: 'Mar: 7' }, { x: 'Apr', y: 13.5, text: 'Apr: 13.5' },
    ];
}

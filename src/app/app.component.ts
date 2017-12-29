import { Component, ComponentFactoryResolver, ViewChild, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { createElement, EventHandler } from '@syncfusion/ej2-base';
import { CheckBox } from '@syncfusion/ej2-ng-buttons';
import { ej2ButtonComponent } from './button.component';
import { ej2datepickerComponent } from './datepicker.component';
import { ej2GridComponent } from './grid.component';
import { ej2ChartComponent } from './chart.component';
import { ej2DropdownComponent } from './dropdown.component';
import { ej2ToolbarComponent } from './toolbar.component';
import { ej2CalendarComponent } from './calendar.component';
import { ej2PagerComponent } from './pager.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  entryComponents: [ej2ButtonComponent, ej2datepickerComponent, ej2GridComponent, ej2ChartComponent, ej2DropdownComponent, ej2ToolbarComponent, ej2CalendarComponent, ej2PagerComponent],
})
export class AppComponent {
  public ej2Elements: string = '';
  // defined the array of data
  public data: string[] = ['100%', '90%', '75%', '50%'];
  constructor(private componentResolver: ComponentFactoryResolver, protected viewContainerRef: ViewContainerRef) { }
  public addComponent(ej2Component: any) {
    let componentFactory = this.componentResolver.resolveComponentFactory(ej2Component);
    const ref = this.viewContainerRef.createComponent(componentFactory);
    let element = ref.location.nativeElement.firstElementChild;
    document.getElementById("iframe").appendChild(element)
    this.ej2Elements += element.outerHTML + '\n';

  }
  public dragstart(e: any) {
    e.dataTransfer.setData("text", e.target.id)
  }

  public dragover(e: any) {
    e.preventDefault();
  }
  public drop(e: any) {
    let id = e.dataTransfer.getData("text")
    switch (id) {
      case 'grid':
        this.addComponent(ej2GridComponent);
        break;
      case 'chart':
        this.addComponent(ej2ChartComponent);
        break;
      case 'button':
        this.addComponent(ej2ButtonComponent);
        break;
      case 'datepicker':
        this.addComponent(ej2datepickerComponent)
        break;
      case 'dropdown':
        this.addComponent(ej2DropdownComponent)
        break;
      case 'toolbar':
        this.addComponent(ej2ToolbarComponent)
        break;
      case 'calendar':
        this.addComponent(ej2CalendarComponent)
        break;
      case 'pager':
        this.addComponent(ej2PagerComponent)
        break;
    }

  }


  // Property Panel

  private curInst: any;
  private props: Array<string> = ['locale', 'cssClass', 'iconCss', 'floatLabelType', 'strictMode', 'showClearButton'];

  clickHandler(e: Event) {
    if ((e.target as Element).closest('.e-btn')) {
      this.createInstance((e.target as Element).closest('.e-btn'), '.e-btn');
    } else if ((e.target as Element).closest('.e-input')) {
      this.createInstance((e.target as Element).closest('.e-input'), '.e-input');
    } else if ((e.target as Element).closest('.e-accumulationchart')) {
      this.createInstance((e.target as Element).closest('.e-accumulationchart'), '.e-accumulationchart');
    } else if ((e.target as Element).closest('.e-grid')) {
      this.createInstance((e.target as Element).closest('.e-grid'), '.e-grid');
    } else if ((e.target as Element).closest('.e-input-group')) {
      this.createInstance((e.target as Element).closest('.e-input-group'), '.e-input-group');
    } else if ((e.target as Element).closest('.e-dialog')) {
      this.createInstance((e.target as Element).closest('.e-dialog'), '.e-dialog');
    } else if ((e.target as Element).closest('.e-listview')) {
      this.createInstance((e.target as Element).closest('.e-listview'), '.e-listview');
    } else if ((e.target as Element).closest('.e-accordion')) {
      this.createInstance((e.target as Element).closest('.e-accordion'), '.e-accordion');
    } else if ((e.target as Element).closest('.e-toolbar')) {
      this.createInstance((e.target as Element).closest('.e-toolbar'), '.e-toolbar');
    } else if ((e.target as Element).closest('.e-tab')) {
      this.createInstance((e.target as Element).closest('.e-tab'), '.e-tab');
    } else if ((e.target as Element).closest('.e-treeview')) {
      this.createInstance((e.target as Element).closest('.e-treeview'), '.e-treeview');
    }
  }

  private createInstance(ele: any, className: string) {
    if (this.isSameInstance((ele as any).closest(className))) {
      return;
    }
    this.curInst = (ele as any).closest(className).ej2_instances[0];
    this.createPropertiesElement(this.curInst.properties);
  }

  private isSameInstance(ele: any) {
    return ele.ej2_instances[0] === this.curInst;
  }

  createPropertiesElement(objModel: Object) {
    let ele: Element = document.getElementById('propertypanel');
    let inputEle: Element;
    let isApplicable: boolean;
    let parentDiv: Element = createElement('div', { className: 'e-parent-group' });
    ele.innerHTML = '';
    ele.appendChild(parentDiv);
    for (let key in objModel) {
      isApplicable = true;
      this.props.forEach((prop) => {
        if (prop === key) {
          isApplicable = false;
        }
      })
      if (typeof (objModel[key]) !== 'object' && isApplicable) {
        let tr: Element = createElement('div', { className: 'row marginZero' });
        parentDiv.appendChild(tr);
        let td: Element = createElement('div', { className: 'col-md-6 padding0' });
        td.appendChild(createElement('label', { innerHTML: key }));
        tr.appendChild(td);
        if (typeof (objModel[key]) === 'string' || typeof (objModel[key]) === 'number') {
          td = createElement('div');
          let wrapper: Element = createElement('div', { className: 'e-input-group col-md-6 padding0' });
          inputEle = createElement('input', { className: 'e-input', attrs: { 'property': key } });
          wrapper.appendChild(inputEle);
          td.appendChild(wrapper);
          tr.appendChild(td);
          this.addInputEventLister(inputEle);
          this.addEventListener(inputEle);
        } else if (typeof (objModel[key]) === 'boolean') {
          td = createElement('div');
          inputEle = createElement('input', { attrs: { 'property': key } });
          td.appendChild(inputEle);
          tr.appendChild(td);
          this.addEventListener(inputEle);
          new CheckBox({ checked: this.curInst[key] }, inputEle as HTMLInputElement);
        }
      }
    }
  }

  addEventListener(ele: Element) {
    EventHandler.add(ele, 'change', this.changeHandler, this);
  }

  addInputEventLister(ele: Element) {
    EventHandler.add(ele, 'focus', this.focusIn, this);
    EventHandler.add(ele, 'blur', this.focusOut, this);
  }

  changeHandler(e: Event) {
    let property: string = (e.target as Element).getAttribute('property');
    if (typeof (this.curInst.properties[property]) === 'boolean') {
      this.curInst[property] = (e.target as HTMLInputElement).checked;
    } else if (typeof (this.curInst.properties[property]) === 'string') {
      this.curInst[property] = (e.target as HTMLInputElement).value;
    }
  }

  //Focus Event function for input component
  public focusIn(target: any): void {
    target.currentTarget.parentElement.classList.add('e-input-focus');
  }

  //FocusOut Event function for input component
  public focusOut(target: any): void {
    target.currentTarget.parentElement.classList.remove('e-input-focus');
  }

  private sizeChangeHandler(e: any) {
    let elem: any = document.getElementById('appContainer');
    if (e.itemData === '90%') {
      elem.style.transform = 'scale(0.90,0.90)';
      elem.style.marginTop = ((elem.offsetHeight * 0.9) - elem.offsetHeight) / 2 + 'px';
    } else if (e.itemData === '75%') {
      elem.style.transform = 'scale(0.75,0.75)';
      elem.style.marginTop = ((elem.offsetHeight * 0.75) - elem.offsetHeight) / 2 + 'px';
    } else if (e.itemData === '50%') {
      elem.style.transform = 'scale(0.50,0.50)';
      elem.style.marginTop = ((elem.offsetHeight * 0.50) - elem.offsetHeight) / 2 + 'px';
    } else {
      document.getElementById('appContainer').style.transform = 'scale(1,1)';
      elem.style.marginTop = ((elem.offsetHeight * 1) - elem.offsetHeight) / 2 + 'px';
    }
  }

  private specClickHandler(e: any) {
    if (e.target.classList.contains('glyphicon-eye-open')) {
      e.target.classList.add('active');
      document.getElementsByClassName('glyphicon-phone')[0].classList.remove('active');
      document.getElementsByClassName('middlepanel')[0].classList.remove('col-md-6');
      document.getElementsByClassName('middlepanel')[0].classList.add('col-md-12');
      (document.getElementsByClassName('icontool')[0] as HTMLElement).style.display = 'none';
      (document.getElementsByClassName('propertypanel')[0] as HTMLElement).style.display = 'none';

    } else {
      document.getElementsByClassName('glyphicon-eye-open')[0].classList.remove('active');
      e.target.classList.add('active');
      (document.getElementsByClassName('icontool')[0] as HTMLElement).style.display = 'block';
      (document.getElementsByClassName('propertypanel')[0] as HTMLElement).style.display = 'block';
      (document.getElementsByClassName('middlepanel')[0] as HTMLElement).classList.remove('col-md-12');
      (document.getElementsByClassName('middlepanel')[0] as HTMLElement).classList.add('col-md-6');
    }
  }

}

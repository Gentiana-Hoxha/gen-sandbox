import {Directive} from '@angular/core';

@Directive({
  selector: '[nodeLabel]',
})
export class NodeLabelDirective {}

@Directive({
  selector: 'button[nodeAction]',
  host: {
    '[class.node-block-action]': 'true',
    '[class.btn]': 'true',
    '[class.btn-reset]': 'true',
  },
})
export class NodeActionDirective {}

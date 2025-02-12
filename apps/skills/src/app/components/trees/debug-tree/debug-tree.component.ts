import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VisualiserComponent } from '../../tree-elements/visualiser/visualiser.component';
import { NodeComponent } from '../../tree-elements/node/node.component';
import { EdgeComponent } from '../../tree-elements/edge/edge.component';
import { debugDP } from '../../mocks/mocks';

@Component({
  selector: 'debug-tree',
  imports: [CommonModule, VisualiserComponent, NodeComponent, EdgeComponent],
  templateUrl: './debug-tree.component.html',
  styleUrl: './debug-tree.component.css',
})
export class DebugTreeComponent {

  public array = debugDP.data.executionTemplate.steps;

  public addSmth(){};
}

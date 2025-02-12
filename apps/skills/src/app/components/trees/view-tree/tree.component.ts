import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VisualiserComponent } from '../../tree-elements/visualiser/visualiser.component';
import { NodeComponent } from '../../tree-elements/node/node.component';
import { EdgeComponent } from '../../tree-elements/edge/edge.component';
import { viewDp } from '../../mocks/mocks';

@Component({
  selector: 'tree',
  imports: [CommonModule, VisualiserComponent, NodeComponent, EdgeComponent],
  templateUrl: './tree.component.html',
  styleUrl: './tree.component.css',
})
export class TreeComponent {

  public array = viewDp.data.executionTemplate.steps;

  public addSmth(){};
}

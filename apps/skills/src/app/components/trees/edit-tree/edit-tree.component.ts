import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VisualiserComponent } from '../../tree-elements/visualiser/visualiser.component';
import { NodeComponent } from '../../tree-elements/node/node.component';
import { EdgeComponent } from '../../tree-elements/edge/edge.component';
import { editDP } from '../../mocks/mocks';

@Component({
  selector: 'edit-tree',
  imports: [CommonModule, VisualiserComponent, NodeComponent, EdgeComponent],
  templateUrl: './edit-tree.component.html',
  styleUrl: './edit-tree.component.css',
})
export class EditTreeComponent {

  public array = editDP.data.executionTemplate.steps;

  // public array = [];

  public addSmth(){};
}

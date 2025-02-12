import { Route } from '@angular/router';
import { EditTreeComponent } from './components/trees/edit-tree/edit-tree.component';
import { TreeComponent } from './components/trees/view-tree/tree.component';
import { DebugTreeComponent } from './components/trees/debug-tree/debug-tree.component';

export const appRoutes: Route[] = [
    { path: 'edit', component: EditTreeComponent },
    { path: 'view', component: TreeComponent },
    { path: 'logs', component: DebugTreeComponent },
];

export class NodeBlockConfig {
    public width = 240;
    public height = 72;
    public iconSize = 32;
    public strokeColor = NodeStates.StateLess;
    public activeColor = NodeStates.Running;
    public strokeDashArray = 0;
    public opacity = 1;
}

export enum NodeStates {
    StateLess = '#b5b6c6',
    Active = '#264AFF',
    Running = '#264AFF',
    Waiting = '#264AFF',
    Completed = '#157757',
    Received = '#157757',
    Filtered = '#454c6d',
    Stopped = '#B26000',
    Failed = '#e12e2e',
  }

  //Running / Waiting - blue
// Completed/Received - Green
// Filtered - grey
// Stopped - orange
// Failed - red

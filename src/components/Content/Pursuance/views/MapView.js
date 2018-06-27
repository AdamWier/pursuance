import React, { Component } from 'react';
import {ForceGraph, ForceGraphNode, ForceGraphLink} from 'react-vis-force';

export default class MapView extends Component {
  render() {
    return (
      <ForceGraph simulationOptions={{ height: 300, width: 300 }}>
        <ForceGraphNode node={{ id: 'first-node' }} fill="red" />
        <ForceGraphNode node={{ id: 'second-node' }} fill="blue" />
        <ForceGraphNode node={{ id: 'third-node' }} fill="green" />
        <ForceGraphLink link={{ source: 'first-node', target: 'second-node' }} />
        <ForceGraphLink link={{ source: 'third-node', target: 'second-node' }} />
      </ForceGraph>
    )
  }
}
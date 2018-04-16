import React, {Component} from 'react'
import NAV2D from './vendor/nav2d.js'
import ROS2D from './vendor/ros2d.js'
import ROSLIB from 'roslib'

export default class extends Component {

  componentDidMount(){
    const ros = new ROSLIB.Ros({
      url : 'ws://localhost:9090'
    });
    const viewer = new ROS2D.Viewer({
      divID : this.props.id,
      width : this.props.width,
      height : this.props.height
    });
    const nav = NAV2D.OccupancyGridClientNav({
      ros : ros,
      rootObject : viewer.scene,
      viewer : viewer,
      serverName : this.props.serverName
    });
  }
  render() {
    return <div id={this.props.id}/>
  }
}

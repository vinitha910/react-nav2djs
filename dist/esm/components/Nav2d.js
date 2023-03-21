import React, { useEffect } from 'react';
import NAV2D from '../vendor/nav2d.js';
import ROS2D from '../vendor/ros2d.js';
import ROSLIB from 'roslib';
var Nav2d = function (_a) {
    var _b = _a.ros, ros = _b === void 0 ? new ROSLIB.Ros({ url: 'ws://localhost:9090' }) : _b, _c = _a.id, id = _c === void 0 ? 'nav2d' : _c, _d = _a.width, width = _d === void 0 ? 500 : _d, _e = _a.height, height = _e === void 0 ? 500 : _e, _f = _a.serverName, serverName = _f === void 0 ? '/move_base' : _f;
    useEffect(function () {
        var viewer = new ROS2D.Viewer({
            divID: id,
            width: width,
            height: height
        });
        NAV2D.OccupancyGridClientNav({
            ros: ros,
            rootObject: viewer.scene,
            viewer: viewer,
            serverName: serverName
        });
    }, [id, ros, serverName, height, width]);
    return React.createElement("div", { id: id });
};
export default Nav2d;
//# sourceMappingURL=Nav2d.js.map
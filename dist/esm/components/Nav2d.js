import React, { useEffect } from 'react';
import NAV2D from '../vendor/nav2d.js';
import ROS2D from '../vendor/ros2d.js';
var Nav2d = function (_a) {
    var ros = _a.ros, _b = _a.id, id = _b === void 0 ? 'nav2d' : _b, _c = _a.width, width = _c === void 0 ? 500 : _c, _d = _a.height, height = _d === void 0 ? 500 : _d, _e = _a.serverName, serverName = _e === void 0 ? '/move_base' : _e;
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
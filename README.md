# react-nav2djs

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

This is a React wrapper for [nav2djs](http://wiki.ros.org/nav2djs). See demo for example usage.

```javascript
class Demo extends Component {
  render() {
    return <div>
      <h1>react-nav2djs Demo</h1>
      <Nav2d id='random' width={750} height={800} serverName='/move_base'/>
    </div>
  }
```
## Radom things

Since neither `nav2djs` or `ros2djs` implements a CommonJS interface, I manually implement the interface for them.

## TODO

- Add `propTypes`

[build-badge]: https://img.shields.io/travis/user/repo/master.png?style=flat-square
[build]: https://travis-ci.org/user/repo

[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/npm-package

[coveralls-badge]: https://img.shields.io/coveralls/user/repo/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/user/repo

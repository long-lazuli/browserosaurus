const childProcess = require('child_process');

const openApp = (appName) => {
  // TODO, make this works not only on OSX
  childProcess.spawn('open', ['-a', appName])
}

export default openApp

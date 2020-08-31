const cp = require('child_process');

const execute = async (command) => {
  return new Promise((resolve, reject) => {
    const executedCommand = cp.spawn(command, {
      stdio: 'inherit',
      shell: true
    });

    executedCommand.on('error', reject);
    executedCommand.on('exit', (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject();
      }
    });
  })
}

module.exports = {
  execute
}

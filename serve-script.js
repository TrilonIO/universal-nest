const { LiveReloadCompiler } = require('@nestjs/ng-universal');

const compiler = new LiveReloadCompiler({
  projectName: 'nest-nguniversal-demo',
});
compiler.run();

import { renderModuleFactory } from '@angular/platform-server';
import { AngularUniversalOptions } from '../interfaces/angular-universal-options.interface';
import { join } from 'path';

export function setupUniversal(
  app,
  ngOptions: AngularUniversalOptions & { template: string },
) {
  const { AppServerModuleNgFactory, LAZY_MODULE_MAP } = ngOptions.bundle;
  const {
    provideModuleMap,
  } = require('@nguniversal/module-map-ngfactory-loader');

  app.engine('html', (_, options, callback) => {
    renderModuleFactory(AppServerModuleNgFactory, {
      document: ngOptions.template,
      url: options.req.url,
      extraProviders: [
        provideModuleMap(LAZY_MODULE_MAP),
        {
          provide: 'serverUrl',
          useValue: `${options.req.protocol}://${options.req.get('host')}`,
        },
      ],
    }).then(html => {
      callback(null, html);
    });
  });
  app.set('view engine', 'html');
  app.set('views', ngOptions.viewsPath);
}

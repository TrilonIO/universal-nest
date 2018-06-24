import 'zone.js/dist/zone-node';
import 'reflect-metadata';

import * as express from 'express';
import {
  Module,
  Inject,
  MiddlewareConsumer,
  RequestMethod,
} from '@nestjs/common';
import { DynamicModule, NestModule } from '@nestjs/common/interfaces';
import { readFileSync } from 'fs';

import { applyDomino } from './utils/domino.utils';
import { AngularUniversalOptions } from './interfaces/angular-universal-options.interface';
import { ANGULAR_UNIVERSAL_OPTIONS } from './angular-universal.constants';
import { AngularUniversalController } from './angular-universal.controller';
import { angularUniversalProviders } from './angular-universal.providers';
import { join } from 'path';

@Module({
  controllers: [AngularUniversalController],
  providers: [...angularUniversalProviders],
})
export class AngularUniversalModule implements NestModule {
  constructor(
    @Inject(ANGULAR_UNIVERSAL_OPTIONS)
    private readonly ngOptions: AngularUniversalOptions,
  ) {}

  static forRoot(options: AngularUniversalOptions): DynamicModule {
    options = {
      templatePath: join(options.viewsPath, 'index.html'),
      ...options,
    };
    const template = readFileSync(options.templatePath).toString();

    return {
      module: AngularUniversalModule,
      providers: [
        {
          provide: ANGULAR_UNIVERSAL_OPTIONS,
          useValue: {
            ...options,
            template,
          },
        },
      ],
    };
  }

  configure(consumer: MiddlewareConsumer): void {
    consumer
      .apply(express.static(this.ngOptions.viewsPath))
      .forRoutes('*.*');
  }
}

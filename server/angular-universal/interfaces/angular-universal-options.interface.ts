export interface AngularUniversalOptions {
  viewsPath: string;
  bundle: { AppServerModuleNgFactory, LAZY_MODULE_MAP };
  templatePath?: string;
}
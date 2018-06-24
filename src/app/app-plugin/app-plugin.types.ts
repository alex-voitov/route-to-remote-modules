import { ComponentFactory } from '@angular/core';

export interface PluginLoaderConfig {
  path: string,
  module: string,
  selector: string,
  url: string,
  deps?: string[],
}

export interface PluginConfig {
  name: string,
  loader?: PluginLoaderConfig,
}

export interface AppConfig {
  plugins?: PluginConfig[],
}

export interface PluginLoader {
  config: PluginLoaderConfig,
  componentFactory?: ComponentFactory<any>,
}

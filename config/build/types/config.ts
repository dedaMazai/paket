export type BuildMode = 'development' | 'production';

export interface BuildPaths {
  entry: string;
  build: string;
  src: string;
  styles: string;
  buildStyles: string;
  types: string;
  buildTypes: string;
}

export interface BuildEnv {
  mode: BuildMode;
}

export interface BuildOptions {
  mode: BuildMode;
  paths: BuildPaths;
  isDev: boolean;
}

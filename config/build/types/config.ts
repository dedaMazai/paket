export type BuildMode = 'development' | 'production';

export interface BuildPaths {
  entry: string;
  build: string;
  src: string;
}

export interface BuildEnv {
  mode: BuildMode;
}

export interface BuildOptions {
  mode: BuildMode;
  paths: BuildPaths;
  isDev: boolean;
}

export type Position =
  | "top-left"
  | "top-right"
  | "top-center"
  | "bottom-left"
  | "bottom-right"
  | "bottom-center";

export type Theme =
  | "dark"
  | "light"
  | "glass"
  | "minimal"
  | "slate"
  | "gray"
  | "zinc"
  | "neutral"
  | "stone"
  | "red"
  | "orange"
  | "amber"
  | "yellow"
  | "lime"
  | "green"
  | "emerald"
  | "teal"
  | "cyan"
  | "sky"
  | "blue"
  | "indigo"
  | "violet"
  | "purple"
  | "fuchsia"
  | "pink"
  | "rose";

export interface Breakpoint {
  screenTitle: string;
  minWidth: number;
}

export interface TailwindScreenSizeProps {
  className?: string;
  position?: Position;
  theme?: Theme;
  show?: boolean;
  containerClassName?: string;
  textClassName?: string;
  dividerClassName?: string;
  breakpointClassName?: string;
  breakpoints?: Breakpoint[];
  showDefaultBreakpoints?: boolean;
  hideNoTailwindCSSWarning?: boolean;
}

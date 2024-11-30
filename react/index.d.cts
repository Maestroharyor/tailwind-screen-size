import React from 'react';

type Position = "top-left" | "top-right" | "top-center" | "bottom-left" | "bottom-right" | "bottom-center";
type Theme = "dark" | "light" | "glass" | "minimal" | "slate" | "gray" | "zinc" | "neutral" | "stone" | "red" | "orange" | "amber" | "yellow" | "lime" | "green" | "emerald" | "teal" | "cyan" | "sky" | "blue" | "indigo" | "violet" | "purple" | "fuchsia" | "pink" | "rose";
interface Breakpoint {
    screenTitle: string;
    minWidth: number;
}
interface TailwindScreenSizeProps {
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

declare const TailwindScreenSize: React.FC<TailwindScreenSizeProps>;

/**
 * Detects if Tailwind CSS is being used in the project
 * by checking for common Tailwind-specific classes in the document
 */
declare function detectTailwind(): boolean;
/**
 * Shows a warning message in the console
 */
declare function showTailwindWarning(): void;

export { Breakpoint, Position, TailwindScreenSize, TailwindScreenSizeProps, Theme, detectTailwind, showTailwindWarning };

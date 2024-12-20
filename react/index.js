// src/react/TailwindScreenSize.tsx
import React, { useEffect, useState, useMemo } from "react";
import { twMerge } from "tailwind-merge";

// src/utils/index.ts
function detectTailwind() {
  var _a;
  if (typeof window === "undefined")
    return true;
  const tailwindClasses = [
    "sm:",
    "md:",
    "lg:",
    "xl:",
    "2xl:",
    "flex",
    "grid",
    "container",
    "px-",
    "py-",
    "mx-",
    "my-",
    "bg-",
    "text-",
    "border-"
  ];
  const styleSheets = Array.from(document.styleSheets);
  try {
    for (const sheet of styleSheets) {
      try {
        if (!((_a = sheet.href) == null ? void 0 : _a.includes(window.location.origin)))
          continue;
        const rules = Array.from(sheet.cssRules);
        for (const rule of rules) {
          const ruleText = rule.cssText;
          if (tailwindClasses.some((cls) => ruleText.includes(cls))) {
            return true;
          }
          if (ruleText.includes("@tailwind") || ruleText.includes("@layer") || ruleText.includes("@apply")) {
            return true;
          }
        }
      } catch (e) {
        continue;
      }
    }
    const allElements = Array.from(document.getElementsByTagName("*"));
    for (const element of allElements) {
      if (tailwindClasses.some(
        (cls) => Array.from(element.classList).some(
          (className) => className.includes(cls.replace(":", "-"))
        )
      )) {
        return true;
      }
    }
    return false;
  } catch (e) {
    console.warn("Error detecting Tailwind CSS");
    return true;
  }
}
function showTailwindWarning() {
  console.warn(
    `%cTailwind Screen Size Warning: Tailwind CSS not detected. 
This component is designed to work with Tailwind CSS. 
Please ensure you have Tailwind CSS properly installed in your project.
Visit https://tailwindcss.com/docs/installation for installation instructions.`,
    "color: #f59e0b; font-weight: bold;"
  );
}

// src/react/TailwindScreenSize.tsx
var positionClasses = {
  "top-left": "top-5 left-5",
  "top-right": "top-5 right-5",
  "bottom-left": "bottom-5 left-5",
  "bottom-right": "bottom-5 right-5",
  "top-center": "top-5 left-1/2 -translate-x-1/2",
  "bottom-center": "bottom-5 left-1/2 -translate-x-1/2"
};
var themeClasses = {
  dark: {
    container: "bg-gray-900/90 text-white",
    text: "text-white",
    divider: "bg-gray-700",
    breakpoint: "text-gray-400"
  },
  light: {
    container: "bg-white/90 text-gray-900",
    text: "text-gray-900",
    divider: "bg-gray-200",
    breakpoint: "text-gray-600"
  },
  glass: {
    container: "bg-white/10 backdrop-blur-md border border-white/20 shadow-lg",
    text: "text-white",
    divider: "bg-white/20",
    breakpoint: "text-white/80"
  },
  minimal: {
    container: "bg-transparent",
    text: "text-gray-600 dark:text-gray-300",
    divider: "bg-gray-300 dark:bg-gray-700",
    breakpoint: "text-gray-500 dark:text-gray-400"
  },
  slate: {
    container: "bg-slate-600/90 text-white",
    text: "text-white",
    divider: "bg-slate-400",
    breakpoint: "text-slate-200"
  },
  gray: {
    container: "bg-gray-600/90 text-white",
    text: "text-white",
    divider: "bg-gray-400",
    breakpoint: "text-gray-200"
  },
  zinc: {
    container: "bg-zinc-600/90 text-white",
    text: "text-white",
    divider: "bg-zinc-400",
    breakpoint: "text-zinc-200"
  },
  neutral: {
    container: "bg-neutral-600/90 text-white",
    text: "text-white",
    divider: "bg-neutral-400",
    breakpoint: "text-neutral-200"
  },
  stone: {
    container: "bg-stone-600/90 text-white",
    text: "text-white",
    divider: "bg-stone-400",
    breakpoint: "text-stone-200"
  },
  red: {
    container: "bg-red-600/90 text-white",
    text: "text-white",
    divider: "bg-red-400",
    breakpoint: "text-red-200"
  },
  orange: {
    container: "bg-orange-600/90 text-white",
    text: "text-white",
    divider: "bg-orange-400",
    breakpoint: "text-orange-200"
  },
  amber: {
    container: "bg-amber-600/90 text-white",
    text: "text-white",
    divider: "bg-amber-400",
    breakpoint: "text-amber-200"
  },
  yellow: {
    container: "bg-yellow-500/90 text-white",
    text: "text-white",
    divider: "bg-yellow-300",
    breakpoint: "text-yellow-100"
  },
  lime: {
    container: "bg-lime-600/90 text-white",
    text: "text-white",
    divider: "bg-lime-400",
    breakpoint: "text-lime-200"
  },
  green: {
    container: "bg-green-600/90 text-white",
    text: "text-white",
    divider: "bg-green-400",
    breakpoint: "text-green-200"
  },
  emerald: {
    container: "bg-emerald-600/90 text-white",
    text: "text-white",
    divider: "bg-emerald-400",
    breakpoint: "text-emerald-200"
  },
  teal: {
    container: "bg-teal-600/90 text-white",
    text: "text-white",
    divider: "bg-teal-400",
    breakpoint: "text-teal-200"
  },
  cyan: {
    container: "bg-cyan-600/90 text-white",
    text: "text-white",
    divider: "bg-cyan-400",
    breakpoint: "text-cyan-200"
  },
  sky: {
    container: "bg-sky-600/90 text-white",
    text: "text-white",
    divider: "bg-sky-400",
    breakpoint: "text-sky-200"
  },
  blue: {
    container: "bg-blue-600/90 text-white",
    text: "text-white",
    divider: "bg-blue-400",
    breakpoint: "text-blue-200"
  },
  indigo: {
    container: "bg-indigo-600/90 text-white",
    text: "text-white",
    divider: "bg-indigo-400",
    breakpoint: "text-indigo-200"
  },
  violet: {
    container: "bg-violet-600/90 text-white",
    text: "text-white",
    divider: "bg-violet-400",
    breakpoint: "text-violet-200"
  },
  purple: {
    container: "bg-purple-600/90 text-white",
    text: "text-white",
    divider: "bg-purple-400",
    breakpoint: "text-purple-200"
  },
  fuchsia: {
    container: "bg-fuchsia-600/90 text-white",
    text: "text-white",
    divider: "bg-fuchsia-400",
    breakpoint: "text-fuchsia-200"
  },
  pink: {
    container: "bg-pink-600/90 text-white",
    text: "text-white",
    divider: "bg-pink-400",
    breakpoint: "text-pink-200"
  },
  rose: {
    container: "bg-rose-600/90 text-white",
    text: "text-white",
    divider: "bg-rose-400",
    breakpoint: "text-rose-200"
  }
};
var defaultBreakpoints = [
  { screenTitle: "XS", minWidth: 0 },
  { screenTitle: "SM", minWidth: 640 },
  { screenTitle: "MD", minWidth: 768 },
  { screenTitle: "LG", minWidth: 1024 },
  { screenTitle: "XL", minWidth: 1280 },
  { screenTitle: "2XL", minWidth: 1536 }
];
var isDevelopment = () => {
  if (typeof process === "undefined")
    return false;
  return process.env.NODE_ENV === "development";
};
var baseClasses = {
  container: "fixed flex items-center gap-2 rounded-full px-2.5 py-1 font-mono text-xs font-medium transition-all duration-200",
  divider: "h-4 w-px"
};
var TailwindScreenSize = ({
  className = "",
  position = "bottom-right",
  theme = "dark",
  show,
  containerClassName = "",
  textClassName = "",
  dividerClassName = "",
  breakpointClassName = "",
  breakpoints,
  showDefaultBreakpoints = true,
  hideNoTailwindCSSWarning = false
}) => {
  const [mounted, setMounted] = useState(false);
  const [dimensions, setDimensions] = useState(null);
  const [currentBreakpoint, setCurrentBreakpoint] = useState("");
  const [hasTailwind, setHasTailwind] = useState(true);
  const [isDevMode, setIsDevMode] = useState(false);
  const allBreakpoints = useMemo(() => {
    const customBreakpoints = breakpoints || [];
    if (!showDefaultBreakpoints)
      return customBreakpoints;
    return [...defaultBreakpoints, ...customBreakpoints].sort(
      (a, b) => a.minWidth - b.minWidth
    );
  }, [breakpoints, showDefaultBreakpoints]);
  useEffect(() => {
    setMounted(true);
    setIsDevMode(isDevelopment());
    if (typeof window !== "undefined") {
      const tailwindDetected = detectTailwind();
      setHasTailwind(tailwindDetected);
    }
  }, []);
  useEffect(() => {
    if (!mounted)
      return;
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, [mounted]);
  useEffect(() => {
    if (mounted && dimensions) {
      const current = allBreakpoints.slice().reverse().find((breakpoint) => dimensions.width >= breakpoint.minWidth);
      setCurrentBreakpoint((current == null ? void 0 : current.screenTitle) || "");
    }
  }, [dimensions, allBreakpoints, mounted]);
  if (!mounted || !dimensions)
    return null;
  if (show === false)
    return null;
  if (!isDevMode && show !== true)
    return null;
  const { width, height } = dimensions;
  const themeStyles = themeClasses[theme];
  return /* @__PURE__ */ React.createElement(
    "div",
    {
      className: twMerge(
        baseClasses.container,
        positionClasses[position],
        themeStyles.container,
        containerClassName,
        className
      )
    },
    /* @__PURE__ */ React.createElement("span", { className: twMerge(themeStyles.text, textClassName) }, width.toLocaleString(), " \xD7 ", height.toLocaleString()),
    /* @__PURE__ */ React.createElement(
      "div",
      {
        className: twMerge(
          baseClasses.divider,
          themeStyles.divider,
          dividerClassName
        )
      }
    ),
    /* @__PURE__ */ React.createElement("span", { className: twMerge(themeStyles.breakpoint, breakpointClassName) }, currentBreakpoint),
    !hasTailwind && !hideNoTailwindCSSWarning && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(
      "div",
      {
        className: twMerge(
          baseClasses.divider,
          themeStyles.divider,
          dividerClassName
        )
      }
    ), /* @__PURE__ */ React.createElement(
      "span",
      {
        className: twMerge(themeStyles.breakpoint, breakpointClassName)
      },
      "No TailwindCSS Detected"
    ))
  );
};
export {
  TailwindScreenSize,
  detectTailwind,
  showTailwindWarning
};

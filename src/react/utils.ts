/**
 * Detects if Tailwind CSS is being used in the project
 * by checking for common Tailwind-specific classes in the document
 */
export function detectTailwind(): boolean {
  if (typeof window === "undefined") return true; // Skip check on server-side

  // Check if any element has common Tailwind utility classes
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
    "border-",
  ];

  // Get all style sheets
  const styleSheets = Array.from(document.styleSheets);

  try {
    // Look through all stylesheets for Tailwind-specific patterns
    for (const sheet of styleSheets) {
      try {
        // Skip external stylesheets
        if (!sheet.href?.includes(window.location.origin)) continue;

        const rules = Array.from(sheet.cssRules);
        for (const rule of rules) {
          const ruleText = rule.cssText;

          // Check for Tailwind's utility class patterns
          if (tailwindClasses.some((cls) => ruleText.includes(cls))) {
            return true;
          }

          // Check for Tailwind's layer markers
          if (
            ruleText.includes("@tailwind") ||
            ruleText.includes("@layer") ||
            ruleText.includes("@apply")
          ) {
            return true;
          }
        }
        // eslint-disable-next-line
      } catch (e) {
        // Skip CORS errors for external stylesheets
        continue;
      }
    }

    // Fallback: Check DOM for common Tailwind classes
    const allElements = Array.from(document.getElementsByTagName("*"));
    for (const element of allElements) {
      if (
        tailwindClasses.some((cls) =>
          Array.from(element.classList).some((className) =>
            className.includes(cls.replace(":", "-"))
          )
        )
      ) {
        return true;
      }
    }

    return false;
  } catch {
    // If there's any error in detection, assume Tailwind is present
    console.warn("Error detecting Tailwind CSS");
    return true;
  }
}

/**
 * Shows a warning message in the console
 */
export function showTailwindWarning() {
  console.warn(
    `%cTailwind Screen Size Warning: Tailwind CSS not detected. 
This component is designed to work with Tailwind CSS. 
Please ensure you have Tailwind CSS properly installed in your project.
Visit https://tailwindcss.com/docs/installation for installation instructions.`,
    "color: #f59e0b; font-weight: bold;"
  );
}

/** @type {import('tailwindcss').Config} */
import typography from "@tailwindcss/typography";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        rotateCircle: "rotate 20s linear infinite",
      },
      keyframes: {
        rotate: {
          "0%": { transform: "rotate(-360deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      typography: {
        custom: {
          css: {
            color: "#374151", // text-gray-700
            h1: {
              fontSize: "2.25rem",
              fontWeight: "700",
              marginBottom: "1rem",
            },
            h2: {
              fontSize: "1.875rem",
              fontWeight: "600",
              marginTop: "1.5rem",
              marginBottom: "0.75rem",
            },
            h3: {
              fontSize: "1.5rem",
              fontWeight: "600",
              marginTop: "1.25rem",
              marginBottom: "0.5rem",
            },
            p: {
              marginBottom: "1rem",
              lineHeight: "1.75rem",
            },
            ul: {
              listStyleType: "disc",
              paddingLeft: "1.25rem",
              marginBottom: "1rem",
            },
            ol: {
              listStyleType: "decimal",
              paddingLeft: "1.25rem",
              marginBottom: "1rem",
            },
            a: {
              color: "#2563eb",
              textDecoration: "underline",
              fontWeight: "500",
            },
            img: {
              borderRadius: "0.5rem",
              marginTop: "1rem",
            },
            blockquote: {
              borderLeft: "4px solid #CBD5E1",
              paddingLeft: "1rem",
              color: "#4B5563",
              fontStyle: "italic",
              marginTop: "1rem",
              marginBottom: "1rem",
            },
            code: {
              backgroundColor: "#F3F4F6",
              padding: "0.25rem 0.5rem",
              borderRadius: "0.25rem",
              fontSize: "0.875rem",
            },
            pre: {
              backgroundColor: "#F9FAFB",
              padding: "1rem",
              borderRadius: "0.5rem",
              overflowX: "auto",
            },
          },
        },
      },
    },
  },
  plugins: [typography],
};

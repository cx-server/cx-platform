import dsConfig from "@tipico/ui/tailwind.config";

/** @type {import('tailwindcss').Config} */
export default {
  ...dsConfig,
  content: [
    "./stories/**/*.{js,jsx,ts,tsx,mdx}",
    "./node_modules/@tipico/ui/dist/**/*.{js,ts,jsx,tsx}",
  ],
};

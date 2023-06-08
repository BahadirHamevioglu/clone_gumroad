// *** LIBS
// ** FONTS
// * SPACE GROTESK
import { spaceGrotesk } from "../libs/fonts";
// * CHIVO
import { chivo } from "../libs/fonts";

// *** STYLES
// ** SCSS
// * RESET SCSS
import "@/app/styles/reset.scss";
// * GLOBAL SCSS
import "@/app/styles/global.scss";
// * VARIABLES SCSS
import "@/app/styles/variables.scss";

// *** METADATA
// * METADATA
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={chivo.className}>{children}</body>
    </html>
  );
}

import { ThemeProvider } from "@/utils/ThemeContext";
import Providers from "./providers";
import "./globals.scss";

export const metadata = {
  title: "SUPCON EMS",
  description: "SUPCON EMS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <Providers>
            <div className="ml-12">{children}</div>
          </Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}

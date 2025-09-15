import type { Metadata } from "next";
import { EuiProviderWrapper } from "./EuiProviderWrapper";

export const metadata: Metadata = {
  title: "Login UI",
  description: "Login page using EUI + Emotion",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <EuiProviderWrapper>{children}</EuiProviderWrapper>
      </body>
    </html>
  );
}

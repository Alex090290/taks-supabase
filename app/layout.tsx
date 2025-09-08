import type { Metadata } from "next";
import "./globals.css";
import "bootswatch/dist/united/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "TASKS",
  description: "Aplicación de tareas con supabase",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" data-bs-theme="dark">
      <body>
        {children}
        <Toaster />
      </body>
    </html>
  );
}

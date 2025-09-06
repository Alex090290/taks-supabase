import type { Metadata } from "next";
import "./globals.css";
import "bootswatch/dist/united/bootstrap.css";
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
    <html lang="es">
      <body>
        {children}
        <Toaster />
      </body>
    </html>
  );
}

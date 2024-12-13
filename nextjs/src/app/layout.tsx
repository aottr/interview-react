import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Interview React",
  description: "React Interview Test App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <div className="flex flex-col min-h-screen">
          <div className="navbar bg-base-200">
            <div className="flex-1">
              <a className="btn btn-ghost text-xl">React Blog Interview</a>
            </div>
            {/* <div className="flex-none">
              <ul className="menu menu-horizontal px-1">
                <li><a>Link</a></li>
              </ul>
            </div> */}
          </div>
          <main className="flex-grow container mx-auto p-4">
            {children}
          </main>
          {/* <footer className="bg-base-200 p-4">
          </footer> */}
        </div>
      </body>
    </html>
  );
}

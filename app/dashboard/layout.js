import { Footer, Navbar, Sidebar } from "../ui";

export const metadata = {
  title: "Admin Dashboard",
  description: "Next.js Tutorial",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-row gap-4">
          <section className="bg-secondary p-4 w-72 h-screen sticky top-0">
            <Sidebar />
          </section>
          <section className="flex-1">
            <nav className="bg-secondary p-4 m-4 rounded-md">
              <Navbar />
            </nav>
            <main className="m-4">{children}</main>
            <Footer />
          </section>
        </div>
      </body>
    </html>
  );
}

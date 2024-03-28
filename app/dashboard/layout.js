export const metadata = {
  title: "Lama Dev Next.js Admin Dashboard",
  description: "Next.js Tutorial",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* <h1>Hanuman</h1> */}
        {children}
      </body>
    </html>
  );
}

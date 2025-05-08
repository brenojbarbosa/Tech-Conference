import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css'; 

export const metadata = {
  title: 'Tech Conference 2025',
  description: 'Landing page do evento de tecnologia',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}

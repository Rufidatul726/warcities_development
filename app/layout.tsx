import "./globals.css";
import Head from "next/head";

import { Footer, NavBar} from "@components";

export const metadata = {
  title: "Warcities",
  description: "Discover world's best esports teams and players",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
        <Head>
          <script src="https://apis.google.com/js/platform.js" async defer></script>
        </Head>
      <body className='relative'>
        {/* <NavBar/> */}
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}

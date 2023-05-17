import "@styles/global.css";

import Provider from "@components/Provider";
import Nav from "@components/Nav";

export const metadata = {
  title: "Promptopedia",
  description: "Discover and share AI Prompts",
  icons: {
    icon: {
      url: "/favicon.ico",
      type: "image/ico",
    },
    shortcut: { url: "/favicon.ico", type: "image/ico" },
  },
};
const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="../public/assets/images/logo.svg" />
      </head>
      <body>
        <Provider>
          <div className="main">
            <div className="gradient" />
          </div>
          <Nav />
          <main className="app">{children}</main>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;

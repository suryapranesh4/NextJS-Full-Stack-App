import "@styles/global.css";

import Provider from "@components/Provider";
import Nav from "@components/Nav";

export const metadata = {
  title: "Promptopedia",
  description: "Discover and share AI Prompts",
};
const RootLayout = ({ children }) => {
  return (
    <html lang="en">
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

import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html className="text-base antialiased font-normal">
        <Head />
        <body className="layoutContainer">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

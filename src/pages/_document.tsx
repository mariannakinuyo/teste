import React from 'react'
import Document, {
    DocumentInitialProps,
    DocumentContext,
    Html,
    Head,
    Main,
    NextScript
} from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import Footer from '../components/Footer'
import Header from '../components/Header'

export default class MyDocument extends Document {
  static async getInitialProps(
      ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

  render(): JSX.Element {
    return (
    <Html lang="pt-BR">
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;800&display=swap" rel="stylesheet" />
        <link rel="icon" href="https://www.cora.com.br/favicon-32x32.png?v=7d4df7f2b6f8f46b24bcd204ea0466a6" />
      </Head>
      <body>
        <Main />
        <NextScript/>
      </body>
    </Html>
    )
  }
}



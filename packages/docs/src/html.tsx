import * as React from 'react'
import iconFont from 'react-native-vector-icons/Fonts/FontAwesome.ttf'

export interface Props {
  htmlAttributes: object
  headComponents: any[]
  bodyAttributes: object
  preBodyComponents: any[]
  body: string
  postBodyComponents: any[]
}

const HTML: React.FunctionComponent<Props> = (props: Props) => {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
        <style
          dangerouslySetInnerHTML={{
            __html: `
              @font-face {
              src: url(${iconFont}) format("truetype");
              font-family: FontAwesome;
            }
            `,
          }}
        />
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <noscript key="noscript" id="gatsby-noscript">
          This app works best with JavaScript enabled.
        </noscript>
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

export default HTML

import Document, {Head, Main,NextScript} from 'next/document';

export default class MyDocument extends Document{
    render(){
        return(
            <html lang="en">
                <Head>
                    <meta name="description" content="A site for my programming portfolio"/>
                    <meta charSet="utf-8"/>
                    <meta name="robots" content="noindex, nofollow"/>
                    <meta name="viewport" content="width=device-width"/>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"/>
                    <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet"/>
                    <link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
  integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
  crossorigin="anonymous"
/>

<meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"></meta>
                </Head>

                <body>
                    <Main/>
                    <NextScript/>
                </body>

                <style global jsx>{`
                body{
                    font-family: 'Open Sans', sans-serif;
                }
                
                `}</style>

<script src="https://unpkg.com/react/umd/react.production.min.js" crossorigin></script>

<script
  src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
  crossorigin></script>

<script
  src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
  crossorigin></script>

<script>var Alert = ReactBootstrap.Alert;</script>
            </html>
        )
    }
}
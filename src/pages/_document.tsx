import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link rel="shortcut icon" href="favicon.png" type="image/png"/>
                    
                    <link rel="manifest" href="/manifest.json"/>
                    <link rel="apple-touch-icon" href="/icon-192x192.png"/>
                    <meta name="theme-color" content="#ffffff"/>
                    <meta name="description" content="An application that uses the Pomodoro technique to increase your productivity in front of the computer."/>
                    <meta name="robots" content="noindex"/>
                    <meta name="Googlebot" content="noindex"/>

                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&amp;family=Rajdhani:wght@600&amp;display=swap" rel="stylesheet"/>

                    <script src="https://kit.fontawesome.com/33621f7366.js" crossOrigin="anonymous"></script>
                </Head>
                <body>
                    <Main/>
                    <NextScript/>
                </body>
            </Html>
        )
    }
}
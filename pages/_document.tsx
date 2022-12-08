import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html>
            <Head />
            <body className="bg-light-primary dark:bg-dark-primary">
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}

import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html>
            <Head />
            <body className="bg-light-primary dark:bg-dark-primary text-light-secondary dark:text-dark-secondary font-body">
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}

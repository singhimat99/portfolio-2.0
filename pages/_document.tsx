import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html>
            <Head />
            <body className="bg-light-primary dark:bg-dark-primary text-light-secondary dark:text-dark-secondary font-body scrollbar scrollbar-track-gray-500/40 scrollbar-thumb-light-highlight/40 dark:scrollbar-thumb-dark-highlight">
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}

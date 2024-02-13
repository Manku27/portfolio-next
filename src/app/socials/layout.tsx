import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
    title: "Socials",
    description: "Posts about tech and my other interests",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (<>
        <section>
            {children}
        </section>
        <Script src="https://platform.twitter.com/widgets.js" />
        <Script src="//www.instagram.com/embed.js" />
    </>
    );
}

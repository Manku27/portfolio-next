import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Socials",
    description: "Posts about tech and my other interests",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <section>
            {children}
        </section>
    );
}

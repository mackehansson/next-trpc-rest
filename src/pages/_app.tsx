import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { MantineProvider } from "@mantine/core";

import { api } from "@/utils/api";

import "@/styles/globals.css";
import { PageHeader } from "@/components/page-header/PageHeader";

const MyApp: AppType<{ session: Session | null }> = ({
    Component,
    pageProps: { session, ...pageProps },
}) => {
    return (
        <SessionProvider session={session}>
            <MantineProvider
                withGlobalStyles
                withNormalizeCSS
                theme={{
                    /** Put your mantine theme override here */
                    colorScheme: "light",
                }}
            >
                <>
                    <PageHeader
                        links={[
                            {
                                label: "Products",
                                link: "#",
                            },
                        ]}
                    />
                    <main>
                        <Component {...pageProps} />
                    </main>
                </>
            </MantineProvider>
        </SessionProvider>
    );
};

export default api.withTRPC(MyApp);

"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {  useState } from "react";
import type { ReactNode} from "react";
import { DefaultSeo } from "next-seo";
import SEO from "@/next-seo.config"; 

export default function Providers({ children }: { children: ReactNode }) {
  
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            retry: false,
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      {/* <DefaultSeo {...SEO} /> */}
      {children}
    </QueryClientProvider>
  );
}
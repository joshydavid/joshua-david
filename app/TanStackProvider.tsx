"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

interface TanStackProviderProps {
  children: React.ReactNode;
}

export const TanStackProvider = ({
  children,
  ...props
}: Readonly<TanStackProviderProps>) => {
  return (
    <QueryClientProvider client={queryClient} {...props}>
      {children}
    </QueryClientProvider>
  );
};

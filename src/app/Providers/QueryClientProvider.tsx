"use client";
import {
  QueryClient,
  QueryClientProvider
    as QueryClientReactQuery
} from "@tanstack/react-query"

interface QueryClientProviderProps {
  children: React.ReactNode;
}

const queryClient = new QueryClient();

export function QueryClientProvider({ children }: QueryClientProviderProps) {
  return (
    <QueryClientReactQuery client={queryClient}>
      {children}
    </QueryClientReactQuery>
  )
}
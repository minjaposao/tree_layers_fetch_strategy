'use client';

import { ReactNode, useState } from 'react';
import UserProvider from '@/context/userContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { User } from '@/types/users';

export function Providers({
  children,
  initialUsers = [],
}: {
  children: ReactNode;
  initialUsers?: User[];
}) {

    const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <UserProvider initialUsers={initialUsers}>
        {children}
      </UserProvider>
    </QueryClientProvider>
  );
}
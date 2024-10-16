import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { User } from "../type";
import { fetchUsers } from "../api";

interface UseUserResult {
  users: User[] | undefined;
  isLoading: boolean;
  isError: boolean;
  error: Error | null;
}

export const useUser = (): UseUserResult => {
  const {
    data: users,
    status,
    fetchStatus,
    isError,
    error,
  }: UseQueryResult<User[], Error> = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  return {
    users,
    isLoading: status === "pending" || fetchStatus === "fetching",
    isError,
    error: error || null,
  };
};

import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then(res => res.json());

export default function useServices() {
  const { data, error } = useSWR("/api/services", fetcher, {
    revalidateOnFocus: false,
    dedupingInterval: 300000, // cache for 5 mins
  });

  return {
    services: data || [],
    isLoading: !data && !error,
    isError: !!error,
  };
}

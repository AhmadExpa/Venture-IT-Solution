import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function useCaseStudies() {
  const { data, error } = useSWR("/api/case-study", fetcher, {
    revalidateOnFocus: false,
    dedupingInterval: 300000, // 5 minutes
  });

  return {
    caseStudies: data || [],
    isLoading: !data && !error,
    isError: !!error,
  };
}

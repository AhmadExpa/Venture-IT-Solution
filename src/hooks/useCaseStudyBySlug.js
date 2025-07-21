import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function useCaseStudiesBySlug(slug) {
  const { data, error } = useSWR(
    slug ? `/api/case-study/${slug}` : null,
    fetcher,
    {
      revalidateOnFocus: false,
      dedupingInterval: 300000,
    }
  );

  return {
    service: data,
    isLoading: !data && !error,
    isError: !!error,
  };
}

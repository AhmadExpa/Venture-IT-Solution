import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function useBlogs() {
  const { data, error } = useSWR("/api/blogs", fetcher, {
    revalidateOnFocus: false,
    dedupingInterval: 300000, // 5 mins
  });

  return {
    blogs: data || [],
    isLoading: !data && !error,
    isError: !!error,
  };
}

import { RefObject, useEffect, useState } from "react";

type ObserverProps<T> = {
  data: T[];
  loadingRef: RefObject<HTMLDivElement> | null;
};

const useObserver = <T,>({ data, loadingRef }: ObserverProps<T>) => {
  const [pageNumber, setPageNumber] = useState(1);
  const [isInitialCall, setIsInitialCall] = useState(false);
  useEffect(() => {
    if (!loadingRef?.current) return;
    const loading = loadingRef.current;

    const loadingObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && isInitialCall) {
          setPageNumber((page: any) => page + 1);
        }
      },
      { threshold: 1 }
    );

    loadingObserver.observe(loading);

    return () => {
      if (loading) loadingObserver.unobserve(loading);
    };
  }, [data, isInitialCall, loadingRef]);

  return {
    pageNumber,
    setIsInitialCall,
  };
};

export default useObserver;

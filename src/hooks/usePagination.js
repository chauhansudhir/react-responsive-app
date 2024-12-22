import { useMemo, useState } from "react";

export default function usePagination(data, itemsPerPage, firstPage = 1) {
  const [currentPage, setCurrentPage] = useState(firstPage);

  const maxPage = Math.max(Math.ceil(data.length / itemsPerPage), 1);

  const currentData = useMemo(() => {
    const begin = (currentPage - 1) * itemsPerPage;
    const end = begin + itemsPerPage;

    // loading data from 0 for this excerise
    return (data || []).slice(0, end);
  }, [currentPage, data, itemsPerPage]);

  const next = () => {
    setCurrentPage((currentPage) => Math.min(currentPage + 1, maxPage));
  };

  const prev = () => {
    setCurrentPage((currentPage) => Math.max(currentPage - 1, 1));
  };

  return { next, prev, currentData, currentPage, maxPage };
}

import React, { useCallback, useState } from "react";

import "./purchase.css";

import { ITEMS_PER_PAGE, PURCHASE_URL } from "../../conf/app-conf";

import useFetchData from "../../hooks/useFetchData";
import usePagination from "../../hooks/usePagination";
import Desktop from "../common/Desktop";
import PurchaseListDesktop from "./PurchaseListDesktop";
import Mobile from "../common/Mobile";
import PurchaseListMobile from "./PurchaseListMobile";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

/**
 *
 * TODO:: render desktop or mobile view based on the device so that we return only the relevant view
 * TODO:: handle top size section for virtualized list
 *
 */
const PurchaseList = () => {
  const [isPaginating, setIsPaginating] = useState(false);

  const { data = [], isLoading } = useFetchData(PURCHASE_URL);

  const { next, currentData, currentPage, maxPage } = usePagination(
    data || [],
    ITEMS_PER_PAGE
  );

  const togglePaginating = () => setIsPaginating((prev) => !prev);

  // TODO ::: use debounce
  const updatePage = useCallback(() => {
    if (isPaginating) return;
    togglePaginating();
    setTimeout(() => {
      next();
      togglePaginating();
    }, 1000);
  }, [isPaginating, next]);

  const { ref } = useIntersectionObserver(updatePage);
  const hasMore = currentData.length > 0 && currentPage < maxPage;

  return (
    <div>
      <section>
        <h1>Purchases</h1>
        <Desktop>
          <PurchaseListDesktop data={currentData} isLoading={isLoading} />
        </Desktop>
        <Mobile>
          <PurchaseListMobile data={currentData} isLoading={isLoading} />
        </Mobile>
        {isPaginating && "paginating..."}
        {hasMore && <div ref={ref}>load more...</div>}
      </section>
    </div>
  );
};

export default PurchaseList;

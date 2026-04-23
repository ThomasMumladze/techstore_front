import { useState, useMemo } from "react";

interface UsePagination {
    data: unknown[];
    itemsPerPage: number;
}

const usePagination = ({ data, itemsPerPage }: UsePagination) => {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const windowWidth = 1200;

    // total pages (limited by maxPageCount)
    const totalPages: number = Math.min(Math.ceil(data.length / itemsPerPage));

    // current items
    const currentItems = useMemo(
        () => data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage),
        [currentPage, data, itemsPerPage],
    );

    // page numbers with ellipsis
    const pageNumbers = useMemo(() => {
        const pages: (number | "...")[] = [];

        const blockSize = windowWidth > 525 ? 5 : windowWidth < 378 ? 3 : 2;
        const step = blockSize - 1; // slide only moves after last page of block
        const overlap = 1; // show 1 page before block for backward navigation

        if (totalPages <= blockSize + 2) {
            for (let i = 1; i <= totalPages; i++) pages.push(i);
            return pages;
        }

        const blockIndex = Math.floor((currentPage - 1) / step);
        let startPage = blockIndex * step + 1;
        const endPage = Math.min(startPage + blockSize - 1, totalPages);

        // Add backward overlap
        startPage = Math.max(2, startPage - overlap);

        // First page
        pages.push(1);
        if (startPage > 2) pages.push("...");

        // Middle pages
        for (let i = startPage; i <= endPage; i++) {
            if (i !== 1 && i !== totalPages) pages.push(i);
        }

        // Last page
        if (endPage < totalPages - 1) pages.push("...");
        pages.push(totalPages);

        return pages;
    }, [currentPage, totalPages, windowWidth]);

    return { currentItems, pageNumbers, currentPage, setCurrentPage };
};

export default usePagination;

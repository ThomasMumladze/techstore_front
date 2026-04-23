import React from "react";
import DropDawnMenu from "../components/DropDawnMenu";
import Card from "../components/Card";
import usePagination from "../hooks/usePagination";

const Shop = () => {
    const data = Array.from({ length: 789 }, (_, i) => ({ id: i + 1 }));
    const { currentItems, currentPage, pageNumbers, setCurrentPage } = usePagination({
        data: data,
        itemsPerPage: 18,
    });

    return (
        <React.Fragment>
            <div className="shop-page">
                <section className="shop-page__filter">
                    <div className="__filter-body">
                        <h4>categories</h4>
                        <DropDawnMenu isOpen={true} />
                    </div>
                </section>
                <section className="shop-page__products">
                    <div className="__products-body">
                        <div className="__products-body--sorter">
                            <select>
                                <option value="default">Sort by</option>
                                <option value="newest">Newest</option>
                                <option value="price_desc">Price (High → Low)</option>
                                <option value="price_asc">Price (Low → High)</option>
                                <option value="rating">Top Rated</option>
                                <option value="discount">Discount</option>
                            </select>
                            <div className="product-founded--sum">
                                <h6>{data.length}</h6>
                                <span>product found</span>
                            </div>
                        </div>
                        <div className="__products-body--product-list">
                            {currentItems.map((item, _) => (
                                <Card key={_} />
                            ))}
                        </div>

                        <div className="__products-body--pagination">
                            {pageNumbers.map((page: number | string, index) =>
                                page === "..." ? (
                                    <span key={index}>…</span>
                                ) : (
                                    <button
                                        key={index}
                                        onClick={() => {
                                            setCurrentPage(page as number);
                                            // scrollTo({ top: 0, behavior: "smooth" });
                                        }}
                                        className={page === currentPage ? "active" : ""}
                                    >
                                        {page}
                                    </button>
                                ),
                            )}
                        </div>
                    </div>
                </section>
            </div>
        </React.Fragment>
    );
};

export default Shop;

import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { GET_HIGHLIGHTED } from "../../redux/actions"
import HighlightCard from "./HighlightCard"
import { useState } from "react"
import ReactPaginate from "react-paginate";
import { TiArrowRightThick, TiArrowLeftThick } from 'react-icons/ti'
import '../../scss/mainContent/_highLight.scss'

export default function Highlight() {

    let dispatch = useDispatch()
    let highlightProd = useSelector((state) => state.clientReducer.productHighlight)

    let res = highlightProd.productList

    //!PAGINATION 
    const [currentHigh, setCurrentHigh] = useState(res);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemPerPage = 3;

    const handlePageClick = (e) => {
        const selectedPage = e.selected;
        const offset = selectedPage * itemPerPage;
        setItemOffset(offset);
    }

    useEffect(() => {
        const endOffset = itemOffset + itemPerPage;
        setCurrentHigh(res?.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(res?.length / itemPerPage));
    }, [res, itemOffset, itemPerPage]);

    useEffect(() => {
        dispatch(GET_HIGHLIGHTED())
    }, [dispatch])

    return (
        <div className="highlight--content__container">
            <h2>Productos Destacados</h2>
            <div className="highlight--prods__container">
                {/* <ReactPaginate
                    breakLabel="..."
                    nextLabel={<TiArrowRightThick />}
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={pageCount}
                    previousLabel={<TiArrowLeftThick />}
                    renderOnZeroPageCount={null}
                    className='react--paginate__izq'
                /> */}
                {/* <TiArrowLeftThick className="react--paginate__izq" size={40} /> */}
                {
                    currentHigh?.map(elem => {
                        return <HighlightCard key={elem._id} _id={elem._id} images={elem?.images[0].imageName} productPrice={elem.productPrice} />
                    })
                }

                {/* <TiArrowRightThick className="react--paginate__der" size={40} /> */}
                {/* <ReactPaginate
                    breakLabel="..."
                    nextLabel={<TiArrowRightThick />}
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={pageCount}
                    previousLabel={<TiArrowLeftThick />}
                    renderOnZeroPageCount={null}
                    className='react--paginate__der'
                /> */}
            </div>
            <div className='highlight--pagination__container'>
                <ReactPaginate
                    breakLabel="..."
                    nextLabel={<TiArrowRightThick />}
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={pageCount}
                    previousLabel={<TiArrowLeftThick />}
                    renderOnZeroPageCount={null}
                />
            </div>
        </div>
    )
}
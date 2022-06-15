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
    const [currPage, setCurrPage] = useState(1);
    const itemPerPage = 5;

    const handlePageClick = (e) => {
        const selectedPage = e.selected;
        const offset = selectedPage * itemPerPage;
        setItemOffset(offset);
    }

    function handleClickDer() {
        setCurrPage(currPage)
        if (currPage === pageCount - 1) {
            setCurrPage(0)
            const offset = currPage * itemPerPage;
            setItemOffset(offset);
            const endOffset = itemOffset + itemPerPage;
            setCurrentHigh(res?.slice(itemOffset, endOffset));
        } else {
            setCurrPage(currPage + 1)
            const offset = currPage * itemPerPage;
            setItemOffset(offset);
            const endOffset = itemOffset + itemPerPage;
            setCurrentHigh(res?.slice(itemOffset, endOffset));
        }
    }

    function handleClickIzq() {
        console.log(currPage)
        console.log(pageCount)
        if (currPage === 1) {
            console.log('hola')
            setCurrPage(pageCount)
            console.log(currPage)
            const offset = currPage * itemPerPage;
            console.log(offset)
            setItemOffset(offset);
            console.log(itemOffset)
            const endOffset = itemOffset + itemPerPage;
            console.log(endOffset)
            setCurrentHigh(res?.slice(itemOffset, endOffset));
            console.log(currentHigh)
        } else {
            setCurrPage(currPage - 1)
            console.log(currPage)
            const offset = currPage * itemPerPage;
            console.log(offset)
            setItemOffset(offset);
            console.log(itemOffset)
            const endOffset = itemOffset + itemPerPage;
            console.log(endOffset)
            setCurrentHigh(res?.slice(itemOffset, endOffset));
            console.log(currentHigh)
        }
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
        <div>

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
                    {/* <button className="react--paginate__izq" onClick={handleClickIzq}>
                    <TiArrowLeftThick size={40} />
                </button> */}
                    {
                        currentHigh?.map(elem => {
                            return <HighlightCard key={elem._id} _id={elem._id} images={elem?.images[0].imageName} productPrice={elem.productPrice} />
                        })
                    }


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

                {/* <div className='highlight--pagination__container'>
                <ReactPaginate
                    breakLabel="..."
                    nextLabel={<TiArrowRightThick />}
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={pageCount}
                    previousLabel={<TiArrowLeftThick />}
                    renderOnZeroPageCount={null}
                />
            </div> */}
            </div>
            <div className="react--paginate__der">
                <button onClick={handleClickDer}>
                    <TiArrowRightThick size={40} />
                </button>
            </div>
        </div>
    )
}
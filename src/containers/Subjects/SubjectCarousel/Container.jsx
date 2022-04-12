import './Container.scss';
import BookCard from '../../../components/BookCard';
import ArrowButton from './ArrowButton';
import Dots from './Dots';
import { useState, useCallback } from 'react';
import { Routers } from '../../../constants/routes';
import useViewport from '../../../hooks/useViewPort';
import breakPoints from '../../../constants/breakPoints';
import { coverUrl } from '../../../constants/urls';

const SubjectCarouselContainer = ({ allBooks }) => {
    const [numBookCardInCarousel, setNumBookCardInCarousel] = useState(5);
    const books = [];
    const numbers = [];
    for(let i = 0; i < allBooks.length; i++) {
        let author = '';
        if(allBooks[i].authors.length > 0) {
            for(let index = 0; index < allBooks[i].authors.length; index++) {
                if(index !== allBooks[i].authors.length - 1) {
                    author += allBooks[i]?.authors[index]?.name + ', ';
                } else {
                    author += allBooks[i].authors[index].name;
                }
            }
        }
        books.push(
            <BookCard
                bookData={allBooks[i]}
                key={allBooks[i].key}
                title={allBooks[i].title}
                author={author}
                image={allBooks[i].cover_id ? coverUrl(allBooks[i].cover_id) : ''}
                authorLink={`${Routers.collectionWithoutId}${allBooks[i].authors[0]?.name}`}
                bookId={allBooks[i].key}
            />
        );
        numbers.push(i);
    }
    const start = allBooks.length >= numBookCardInCarousel ? numbers.slice(0, numBookCardInCarousel) : numbers;
    const [state, setState] = useState(start);
    const width = useViewport();
    if(width <= breakPoints.breakpointForSmallPhone) {
        if(numBookCardInCarousel !== 1) {
            setNumBookCardInCarousel(1);
            setState([0]);
        };
    };
    if(breakPoints.breakpointForSmallPhone < width && width <= breakPoints.breakpointForBigPhone) {
        if(numBookCardInCarousel !== 3) {
            setNumBookCardInCarousel(3);
            setState([0, 1, 2]);
        };
    };
    if(breakPoints.breakpointForBigPhone < width) {
        if(numBookCardInCarousel !== 5) {
            setNumBookCardInCarousel(5);
            setState([0, 1, 2, 3, 4]);
        }
    };
    const bookToShow = [];
    const refreshBook = () => {
        state.forEach(element => bookToShow.push(books[element]));
    };
    refreshBook();
    const prevClick = () => {
        const newState = [];
        state.forEach(element => {
            if(element - 1 >= 0) { newState.push(element - 1); }
            else { newState.push(books.length - 1); }
        });
        setState(newState);
    };
    const nextClick = () => {
        const newState = [];
        state.forEach(element => {
            if(element + 1 > books.length - 1) { newState.push(0); }
            else { newState.push(element + 1); }
        });
        setState(newState);
    };
    const moveByDot = (event) => {
        let startId = Number(event.target.id);
        const newState = [];
        for(let i = 0; i < numBookCardInCarousel; i++) {
            newState.push(startId);
            if(startId + 1 > books.length - 1) { startId = 0; }
            else { startId++; }
        }
        setState(newState);
    };
    return <div className='container'>
        <div className='container__row container__book-section'>
            {bookToShow}
        </div>
        <div className='container__flipping-section'>
            <ArrowButton
                direction='prev'
                onClick={
                    useCallback(
                        () => prevClick(),
                        // eslint-disable-next-line react-hooks/exhaustive-deps
                        [state],
                    )
                }
            />
            <Dots
                itemLength={
                    books.length > numBookCardInCarousel ?
                        books.length :
                        0
                }
                onClick={useCallback(
                    (event) => moveByDot(event),
                    // eslint-disable-next-line react-hooks/exhaustive-deps
                    [],
                )}
                slideIndex={state[0]}
            />
            <ArrowButton
                direction='next'
                onClick={
                    useCallback(
                        () => nextClick(),
                        // eslint-disable-next-line react-hooks/exhaustive-deps
                        [state]
                    )}
            />
        </div>
    </div>;
};


export default SubjectCarouselContainer;

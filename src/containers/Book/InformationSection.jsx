import './InformationSection.scss';
import H3 from '../../components/H3';
import ButtonLight from '../../components/ButtonLight';
import React, { useContext } from 'react';
import { languageContext } from '../../utils/providers/languageProvider';

const InformationSection = React.memo(({ book }) => {
    const { translate } = useContext(languageContext);
    const { authors, first_publish_date } = book ?? {};
    return <div className='information-section-container'>
        <div>
            {
                authors?.length > 0 &&
                <>
                    <div className='information-section-container__row'>
                        <H3 text={translate('book.title1')} bold={true} />
                    </div>
                    <div className='information-section-container__row'>
                        {
                            authors?.map((item, index) =>
                                index !== authors?.length - 1 ?
                                    <H3 key={item} text={`${item} ,`} /> :
                                    <H3 key={item} text={`${item}.`} />)
                        }
                    </div>
                </>
            }
        </div>
        <div>
            {
                first_publish_date?.length &&
                <>
                    <div className='information-section-container__row'>
                        <H3 text={translate('book.title2')} bold={true} />
                    </div>
                    <div className='information-section-container__content-section'>
                        <H3 text={first_publish_date} />
                    </div>
                </>
            }
        </div>
        <div>
            {
                typeof (book?.description) !== 'string' &&
                book?.description?.value.length > 0 &&
                book?.description?.value?.split('----------')?.[0].length > 0 &&
                <>
                    <div className='information-section-container__row'>
                        <H3 text={translate('book.title5')} bold={true} />
                    </div>
                    <div className='information-section-container__content-section'>
                        <H3 text={book?.description.value?.split('----------')?.[0] ?? []} />
                    </div>
                </>
            }
        </div>
        <div>
            {
                typeof (book?.description) == 'string' &&
                <>
                    <div className='information-section-container__row'>
                        <H3 text={translate('book.title5')} bold={true} />
                    </div>
                    <div className='information-section-container__content-section'>
                        <H3 text={book?.description.split('----------')[0]} bold={false} />
                    </div>
                </>
            }
        </div>
        <div>
            {
                book?.links?.length > 0 &&
                <>
                    <div className='information-section-container__row'>
                        <H3 text={translate('book.linkTitle')} bold={true} />
                    </div>
                    <div className='information-section-container__links-section'>
                        {
                            (book?.links.length < 15 ?
                                book?.links :
                                book?.links.splice(0, 10)).map(item =>
                                    <div className='information-section-container__links-section' key={item?.title}>
                                        <a href={item?.url}> {item?.title}</a>
                                    </div>
                                )
                        }
                    </div>
                </>
            }
        </div>

        <div>
            {
                book?.isbn_10 &&
                <>
                    <div className='information-section-container__row'>
                        <H3 text={'ISBN'} bold={true} />
                    </div>
                    <div className='information-section-container__links-section'>
                        <div className='information-section-container__content-section' key={book.isbn_10}>
                            <a href={`https://www.google.ru/search?hl=ru&tbo=p&tbm=bks&q=isbn:${book.isbn_10}&num=10`} title='Google Book'>{book.isbn_10}</a>
                            <sup> <a href={`https://www.amazon.com/-/es/dp/${book.isbn_10}`} title='Amazon' className='information-section-container__isbn-section' >A</a> </sup>
                            <sup> <a href={`https://www.findbook.ru/search/d1?isbn=${book.isbn_10}&r=0&s=1&viewsize=15&startidx=0`} title='FindBook.ru' className='information-section-container__isbn-section'>F</a></sup>
                        </div>
                    </div>
                </>
            }
        </div>

        <div>
            {
                book?.publishers?.length > 0 &&
                <>
                    <div className='information-section-container__row'>
                        <H3 text={translate('book.publishers')} bold={true} />
                    </div>
                    <div className='information-section-container__links-section'>
                        {
                            book.publishers.map(item =>
                                <div className='information-section-container__links-section' key={item}>
                                    <div>{item}</div>
                                </div>)
                        }
                    </div>
                </>
            }
        </div>

        <div>
            {
                book?.physical_format &&
                <>
                    <div className='information-section-container__row'>
                        <H3 text={translate('book.physicalFormat')} bold={true} />
                    </div>
                    <div className='information-section-container__links-section'>
                        <div className='information-section-container__links-section' key={book.physical_format}>
                            <div>{book.physical_format}</div>
                        </div>
                    </div>
                </>
            }
        </div>

        <div>
            {
                book?.subjects?.length > 0 &&
                <>
                    <div className='information-section-container__row'>
                        <H3 text={translate('book.title6')} bold={true} />
                    </div>
                    <div className='information-section-container__buttons-section'>
                        <div>
                            {
                                (book?.subjects?.length < 10 ?
                                    book.subjects :
                                    [...book.subjects].splice(0, 10)).map(item =>
                                        <ButtonLight
                                            key={item}
                                            title={item}
                                            value={item.toLowerCase().split(' ').join('_')}
                                        />)
                            }
                        </div>
                    </div>
                </>
            }
        </div>
        <div>
            {
                book?.subject_people?.length > 0 &&
                <>
                    <div className='information-section-container__row'>
                        <H3 text={translate('book.title7')} bold={true} />
                    </div>
                    <div className='information-section-container__buttons-section'>
                        <div>
                            {
                                (book?.subject_people?.length < 10 ?
                                    book.subject_people :
                                    [...book.subject_people].splice(0, 10)).map(item =>
                                        <ButtonLight
                                            key={item}
                                            title={item}
                                            value={item.toLowerCase().split(' ').join('_')}
                                        />)
                            }
                        </div>
                    </div>
                </>
            }
        </div>
        <div>
            {book?.subject_places?.length > 0 &&
                <>
                    <div className='information-section-container__row'>
                        <H3 text={translate('book.title8')} bold={true} />
                    </div>
                    <div className='information-section-container__buttons-section'>
                        <div>
                            {
                                (book?.subject_places?.length < 10 ?
                                    book?.subject_places :
                                    [...book?.subject_places].splice(0, 10)).map(item =>
                                        <ButtonLight
                                            key={item}
                                            title={item}
                                            value={item.toLowerCase().split(' ').join('_')} />)
                            }
                        </div>
                    </div>
                </>
            }
        </div>
    </div>;
});


export default InformationSection;

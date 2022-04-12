import NavBar from '../../components/NavBar/index.jsx';
import H1 from '../../components/H1';
import H2 from '../../components/H2';
import SubjectCarousel from './SubjectCarousel';
import SubjectContainer from './SubjectList';
import { useContext } from 'react';
import { languageContext } from '../../utils/providers/languageProvider';
import * as subjectConfiguration from '../../constants/subjectConfiguration.json';
import Title from './SubjectCarousel/Title';
import { Routers } from '../../constants/routes';
import './index.scss';

const Subject = () => {
    const { translate } = useContext(languageContext);
    const subjects = subjectConfiguration.subjects;
    const generalCollections = subjects.generalCollections;
    return <>
        <NavBar />
        <H1 text={translate('subjects.h1Text')} left={true} />
        <SubjectContainer
            subject={generalCollections.collectionContent}
            subjectLanguage={generalCollections.collectionContentLanguage.map(item => translate(item))}
        />
        {
            subjects.collections.map(item => {
                return <div key={item.collectionName}>
                    <div className={'subject-collection__title'}>
                        <H2 text={translate(`${item.collectionName}`)} left={true} />
                        <Title
                            to={`${Routers.collectionWithoutId}${item.collectionId}`}
                            linkName={translate('subjects.nameOfLinkSeeAll')}
                        />
                    </div>
                    <SubjectContainer
                        subject={item.collectionContent}
                        subjectLanguage={item.collectionContentLanguage.map(subjectId => translate(subjectId))}
                    />
                    {
                        item.displayCarousel &&
                        <SubjectCarousel
                            text={translate(item.collectionName)}
                            linkName={translate('subjects.nameOfLinkSeeAll')}
                            id={item.collectionId}
                        />
                    }
                </div>;
            }
            )
        }
    </>;
};

export default Subject;

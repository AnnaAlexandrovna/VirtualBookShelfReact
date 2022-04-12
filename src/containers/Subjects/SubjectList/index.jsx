import './index.scss';
import ButtonLight from '../../../components/ButtonLight';
import React from 'react';

const SubjectContainer = React.memo(({ subject, subjectLanguage }) =>
    <div className='subject-list-container'>
        {
            subject.map((item, index) =>
                <ButtonLight
                    key={item}
                    title={subjectLanguage[index]}
                    value={item}
                />
            )
        }
    </div>
);


export default SubjectContainer;

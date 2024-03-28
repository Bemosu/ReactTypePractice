import React from 'react';
import { useParams } from 'react-router-dom';
import Project1 from './Project1';
import Project2 from './Project2';
import Project3 from './Project3';

type DetailProps = {
    text:String
};

const ProjectDetail : React.FC<DetailProps> = ({text}):JSX.Element => {
    const {projectId} = useParams<{projectId: string}>();
    console.log('Parms', projectId, text);
    return (
        <div>
            <h2>프로젝트 디테일 페이지</h2>
            {projectId === '1'? <Project1/> : 
                projectId === '2'? <Project2/> :
                <Project3/>}
            
        </div>
    )
}

export default ProjectDetail;
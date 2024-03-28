import React from 'react';

const Project: React.FC = () => {
    return (
        <div className='container border-8 border-blue-200'>
            <h1>메인 페이지</h1>
            <ul>
                <li><a href="/project/1">링크1</a></li>
                <li><a href="/project/2">링크2</a></li>
                <li><a href="/project/3">링크3</a></li>
            </ul>
        </div>
    )
}
export default Project;
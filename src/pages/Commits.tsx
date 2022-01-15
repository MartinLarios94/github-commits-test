import React from 'react'
import {useParams} from 'react-router-dom';

const Commits = () => {
    const params = useParams();
    return (
        <div>
            {JSON.stringify(params, null, 5)}
        </div>
    )
}

export default Commits

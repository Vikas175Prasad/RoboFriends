import React from 'react';
const Card = ({id, name, email}) => {
        return (
            <div id={id} className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
                <img src={`https://robohash.org/${name}?100x100`} alt="Profile Pic" />
                <div className='tc'>
                    <h2>
                        {name}
                    </h2>
                    <p>
                        {email}
                    </p>
                </div>
            </div>
        );
}

export default Card;
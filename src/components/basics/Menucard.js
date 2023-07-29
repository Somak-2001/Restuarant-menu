import React from 'react';

const Menucard = ({ menudata }) => {
    return (
        <>
        <section className='Main-card-container'>
        {menudata.map((curelem) => {
            return (
                <>
                <div classname="card-container" key={curelem.id}>
                    <div className='card'>
                        <div className='card-body'>
                            <span className='card-number card-circle subtle'>{curelem.id}</span>
                            <span className='card-author subtle'>{curelem.category}</span>
                            <br></br>
                            <br></br>
                            <h2 className='card-title'>{curelem.name}</h2>
                            <span className='card-description subtle'>
                                <q>
                                    {curelem.description}
                                </q>
                            </span>
                            <br></br>
                            <div className='card-line'><hr></hr></div>
                            <div className='card-read'>Read</div>
                            </div>
                            <div className='Footer'>
                            <figure>
                                <img src={curelem.image} alt="images" classname='card-media' />
                            </figure>
                            <button classname='card-tag subtle'>Order Now</button>
                        </div>
                    </div>
                </div>
           
            </>
        )
    })}
    </section>
    </>
)
}

export default Menucard;

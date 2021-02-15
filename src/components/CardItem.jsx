import React from 'react';
// import { Link } from 'react-router-dom';
import useSound from "use-sound";
import ImgSound from "../sounds/faxsound.wav";

function CardItem(props) {
    const { url, label, description, img } = props.data
    const [playActive] = useSound(ImgSound, { volume: 0.50 });
    return (
        <>
            <li className='cards__item__data'>
                {/* <Link className='cards__item__link' to={link}> */}
                <a href={url} className='cards__item__link' target="blank" onClick={playActive}>
                    <figure className='cards__item__pic-wrap' data-category={label}>
                        <img
                            className='cards__item__img'
                            alt='Travel Image'
                            src={img}
                        />
                    </figure>
                    <div className='cards__item__info'>
                        <h5 className='cards__item__text'>{description}</h5>
                    </div>
                </a>
                {/* </Link> */}
            </li>
        </>
    );
}

export default CardItem;
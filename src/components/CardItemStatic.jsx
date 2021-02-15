import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Cards.css';
import useSound from "use-sound";
import ImgSound from "../sounds/faxsound.wav";

function CardItemStatic(props) {
    const [playActive] = useSound(ImgSound, { volume: 0.50 });
    const { link, label, description, img } = props

    return (
        <>
            <li className='cards__item'>
                <Link className='cards__item__link' to={link}>
                    <figure className='cards__item__pic-wrap' data-category={label}>
                        <img
                            className='cards__item__img'
                            alt='Travel Image'
                            src={img}
                            onClick={playActive}
                        />
                    </figure>
                    <div className='cards__item__info'>
                        <h5 className='cards__item__text'>{description}</h5>
                    </div>
                </Link>
            </li>
        </>
    );
}

export default CardItemStatic;
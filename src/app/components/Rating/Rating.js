import React from 'react';
import styles from './styles.css';
import Star from "../Star";

const Rating = ({ itemId, selected = 0, total = 5, onRate }) => (
    <div className={styles.rating}>
        {
            [...Array(total)].map( (n, i) => (
                <Star
                    key={i}
                    starId={i}
                    itemId={itemId}
                    selected={i < selected}
                    onRate={onRate}
                />
            ))
        }
        <p className={styles.totalStars} >{selected} of {total}</p>
    </div>
);

export default Rating;
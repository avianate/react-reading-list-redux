import React from 'react';
import styles from './styles.css';

const ReadIcon = ({width, height, fillColor="limegreen", strokeColor}) => (
    <svg 
        viewBox="0 0 32 32" 
        className={styles.read}
        width={width}
        height={height}
        fill={fillColor}
    >
        <path className="path1" d="M27 4l-15 15-7-7-5 5 12 12 20-20z"></path>
    </svg>
);

export default ReadIcon;
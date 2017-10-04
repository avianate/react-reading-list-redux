import React from 'react';
import styles from "./styles.css";
import Grid from "../Grid";

const getStyles = (style, isRead) => (
    isRead ? style + " " + styles.read : style
);

const Tile = ({isRead, imgSrc, title, meta, body=[], actions}) => (

    <Grid className={styles.grid} columns="1fr 2fr">

        <section className={getStyles(styles.section, isRead)}>
            <img className={styles.image} src={imgSrc} alt="" />
            {actions}        
        </section>

        <section className={getStyles(styles.content, isRead)}>

            <h3 className={styles.title}>{title}</h3>
            <h6 className={styles.meta}>{meta}</h6>
            
            {
                body && body.map( (paragraph, i) => (
                    <p key={i} className={styles.body}>{paragraph}</p>
                ))
            }

        </section>
        
    </Grid>
);

export default Tile;
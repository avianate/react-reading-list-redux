import React from "react";
// import Greeting from "../../components/Greeting";
import SimpleForm from "../../components/SimpleForm";
import TileList from "../../components/TileList";
import styles from "./style.css";

const ReadingListView = ({myBooks, onAdd, onReadToggle, onDelete, onRate}) => (
    <div className={styles.readingListContainer}>
        <SimpleForm onAdd={onAdd} />
        <TileList
            assets={myBooks}
            onToggle={onReadToggle}
            onDelete={onDelete}
            onRate={onRate}
        />
    </div>
);

export default ReadingListView;
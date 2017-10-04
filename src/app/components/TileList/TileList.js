import React from "react";
import styles from "./styles.css";
import Tile from "../Tile";
import Actions from "../Actions";
import ReadIcon from "../ReadIcon";
import UnreadIcon from "../UnreadIcon";
import DeleteIcon from "../DeleteIcon";
import Rating from "../Rating";

const TileList = ({assets, onDelete, onToggle, onRate}) => (
    <div className={styles.tileList}>
        {
            assets && assets.map( (asset, i) => ( 
                <Tile
                    key={asset.isbn}
                    imgSrc={asset.imgSrc}
                    title={asset.title}
                    meta={asset.meta}
                    body={asset.body}
                    isRead={asset.isRead}
                    actions={(
                        <Actions
                            assetId={asset.isbn}
                            ActiveToggleIcon={ReadIcon}
                            InactiveToggleIcon={UnreadIcon}
                            DeleteIcon={DeleteIcon}
                            isActive={asset.isRead}
                            onToggle={onToggle}
                            onRemove={onDelete}
                        >
                            <Rating
                                itemId={asset.isbn}
                                selected={asset.ratings}
                                onRate={onRate}
                            />
                        </Actions>
                    )}
                />
            ))
        }
    </div>
);

export default TileList;

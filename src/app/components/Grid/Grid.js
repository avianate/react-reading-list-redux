import React from 'react';

const Grid = ({className, columns="1fr 1fr", rows="auto", gap="10", ...props}) => {
    
    const styles = {
        "display": "grid",
        "gridTemplateColumns": columns,
        "gridTemplateRows": rows,
        "gridGap": gap + "px",
    };

    return (
        <div className={className} style={styles}>{props.children}</div>
    );
}

export default Grid;
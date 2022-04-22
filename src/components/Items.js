import React from "react";
import PropTypes from "prop-types";

/**
 * Render a list of items
 *
 * @param {Object} props - List of items
 */

function Items(props) {
    const { items = [] } = props;

    // If there's a single item, render a span
    if (items.length === 1) {
        return <span className="item-message"> items[0] </span>;
    }

    // Multiple items, render a list
    if (items.length > 1) {
        return ( 
            <ul> 
                {items.map(item => <li key={ item } className="item-message"> { item } </li>)} 
            </ul>
        );
    }

    // No items, render an empty message
    return <span className="item-message"> No items in list </span>;
}

Items.propTypes = {
    items: PropTypes.array,
};

Items.defaultProps = {
    items: [],
};

export default Items;
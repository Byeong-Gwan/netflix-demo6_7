import React from 'react'

const DetailOverview = ({ text }) => {
    if (!text) return null;
    return <p className="detail-overview">{text}</p>;
}

export default DetailOverview

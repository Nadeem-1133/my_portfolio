import React from 'react';

const StudioLogo = ({ compact = false }) => (
  <span className={`studio-logo${compact ? ' studio-logo--compact' : ''}`}>
    <img src={`${process.env.PUBLIC_URL}/images/brand/nk-monogram.png`} alt="" width="48" height="48" />
    <span className="studio-wordmark">NK Build Studio<span>Independent digital studio</span></span>
  </span>
);

export default StudioLogo;

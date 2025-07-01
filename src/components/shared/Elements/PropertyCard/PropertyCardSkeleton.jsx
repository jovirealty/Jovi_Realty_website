import React from 'react';
import './PropertyCardSkeleton.css';

const PropertyCardSkeleton = () => {
    return (
        <div className="property-card skeleton position-relative">
            <div className="property-card-img">
                <span className="badge skeleton-badge"></span>
                <div className="skeleton-img" />
            </div>
            <div className="property-card-body">
                <div className="skeleton skeleton-title"></div>
                <div className="property-name mb-2">
                    <span className="skeleton skeleton-city"></span>
                    <span className="skeleton skeleton-mls"></span>
                </div>
                <div className="location mb-2">
                    <span className="skeleton skeleton-mapicon"></span>
                    <p className="skeleton skeleton-address"></p>
                </div>
                <div className="details">
                <div className="specs border-end">
                    <div className="specific-specs">
                        <span className="skeleton skeleton-spec-number"></span>
                        <span className="skeleton skeleton-spec-icon"></span>
                    </div>
                    <span className="skeleton skeleton-spec-label"></span>
                </div>
                <div className="specs border-end">
                    <div className="specific-specs">
                        <span className="skeleton skeleton-spec-number"></span>
                        <span className="skeleton skeleton-spec-icon"></span>
                    </div>
                    <span className="skeleton skeleton-spec-label"></span>
                </div>
                <div className="specs">
                    <div className="specific-specs">
                        <span className="skeleton skeleton-spec-number"></span>
                        <span className="skeleton skeleton-spec-icon"></span>
                    </div>
                    <span className="skeleton skeleton-spec-label"></span>
                </div>
                </div>
                <p className="skeleton skeleton-offered"></p>
                <div className="btn btn-primary skeleton skeleton-btn position-absolute"></div>
            </div>
        </div>
    )
}
export default PropertyCardSkeleton;
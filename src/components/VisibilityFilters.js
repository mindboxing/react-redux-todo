import React from 'react';
import cx from 'classnames';
import { connect } from 'react-redux';
import { setFilter } from '../redux/actions';
import { VISIBILITY_FILTERS } from '../constants';
import PropTypes from 'prop-types';

const VisibilityFilters = ({ activeFilter, setFilter }) => {
    return (
        <div className="visibility-filters">
            {Object.keys(VISIBILITY_FILTERS)
                .map(filterKey => {
                    const currentFilter = VISIBILITY_FILTERS[filterKey];
                    return (
                        <span
                            key={`visibility-filter-${currentFilter}`}
                            className={cx(
                                "filter",
                                currentFilter === activeFilter && 'filter--active'
                            )}
                            onClick={() => {
                                setFilter(currentFilter);
                            }}
                        >
                            {currentFilter}
                        </span>
                    );
                })
            }
        </div>
    );
};

VisibilityFilters.propTypes = {
  activeFilter: PropTypes.string,
  setFilter: PropTypes.func
}

const mapStateToProps = state => {
    return { activeFilter: state.visibilityFilters };
};

export default connect(
    mapStateToProps,
    { setFilter }
)(VisibilityFilters);
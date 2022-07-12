
import PropTypes from 'prop-types';
import { Fragment } from 'react';
import s from './Section.module.css';

function Section({ title, children }) {
    return (
        <Fragment>
            <h2 className={s.section}>{title}</h2>
            {children}
        </Fragment>
    );
}

Section.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
};

export default Section;
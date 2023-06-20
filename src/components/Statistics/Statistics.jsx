import PropTypes from 'prop-types'
import css from 'components/Statistics/Statistics.module.css'

export const Statistics = ({ title, stats }) => {
    return (
        <section className={css.statistics}>
            {title && <h2 className={css.title}>{title}</h2>}

        <ul className={css.stat_list}>
        {stats.map(({id, label, percentage}) => (
            <li className={css.stat_item} key={id}>
                <span className={css.label}>{label}</span>
                <span className={css.percentage}>{percentage}%</span>
            </li>
        ))}
        </ul>
    </section>
    )
};

Statistics.propTypes = {
    title: PropTypes.string.isRequired,
    stats: PropTypes.array.isRequired,
};
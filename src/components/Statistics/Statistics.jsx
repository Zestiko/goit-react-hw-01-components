import PropTypes from 'prop-types'
import css from './Statistics.module.css'


export const Statistics = ({title, stats}) => {
    let list = stats.map((list => 
      <li className={css.item} key={list.id}>
      <span className="label">{list.label}</span>
      <span className="percentage">{list.percentage}%</span>
    </li>));
    return <section className={css.statistics}>
    {title && <h2 className={css.title}>{title}</h2>}
  
    <ul className={css.statList}>
      {list}
    </ul>
  </section>
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string,
      percentage: PropTypes.number
    }),
  ).isRequired 
}
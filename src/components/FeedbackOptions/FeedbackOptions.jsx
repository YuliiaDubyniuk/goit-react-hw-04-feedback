import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <ul className={css.optionsList}>
    {options.map(option => (
      <li key={option} className={css.listItem}>
        <button
          className={css.optBtn} 
          key={option}
          type="button"
          value={option}
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </button>
      </li>
    ))}
  </ul>
);

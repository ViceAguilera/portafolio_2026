import { techIcon } from './techIcons';

export default function TechChip({ name }) {
  const icon = techIcon(name);
  return (
    <li
      className={icon?.dark ? 'chip chip--dark-brand' : 'chip'}
      style={icon ? { '--brand': icon.color } : undefined}
    >
      {icon && (
        <svg viewBox="0 0 24 24" className="chip__icon" aria-hidden="true">
          <path d={icon.path} />
        </svg>
      )}
      {name}
    </li>
  );
}

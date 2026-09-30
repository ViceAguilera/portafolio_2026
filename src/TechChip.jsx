import { techIcon } from './techIcons';

export default function TechChip({ name }) {
  const icon = techIcon(name);
  return (
    <li
      className="chip"
      style={icon ? { '--brand': icon.color, '--brand-dark': icon.dark } : undefined}
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

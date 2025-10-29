import { cn } from '../lib/utils';

export const CustomCard = ({
  year,
  title,
  subtitle,
  description,
  icon,
  color = 'text-blue-400',
  className,
  dateFormat = 'badge',
}) => {
  return (
    <div className={cn('notification', className)}>
      <div className="notiglow" />
      <div className="notiborderglow" />
      {dateFormat === 'badge' ? (
        <div className="flex items-center mb-2 pl-5 pt-3">
          {icon || <span className="h-4 w-4 mr-2" />}
          <span className={cn('notititle font-bold', color)}>{year}</span>
        </div>
      ) : (
        <p className={cn('notititle font-bold', color, 'pl-5 pt-3')}>
          {year}
        </p>
      )}
      <div className="notititle">{title}</div>
      {subtitle && <div className="notibody font-medium">{subtitle}</div>}
      <div className="notibody">{description}</div>
    </div>
  );
};
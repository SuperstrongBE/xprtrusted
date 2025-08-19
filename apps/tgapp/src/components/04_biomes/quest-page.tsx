"use client";
import classNames from "classnames";
type QuestPageProps = React.HTMLAttributes<HTMLDivElement> & {};
export const QuestPage: React.FunctionComponent<QuestPageProps> = ({
  className,
}) => {
  const rootClasses = classNames({
    [`${className}`]: className,
  });
  return <div className={`${rootClasses}`}>Quest page</div>;
};

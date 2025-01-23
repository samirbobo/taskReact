/* eslint-disable react/prop-types */

const MainButton = ({ href, title, className, target }) => {
  return (
    <a
      href={href}
      className={`transition-all duration-[0.35s] px-[18px] rounded-lg cursor-pointer py-[8px] ${className}`}
      target={target}
    >
      {title}
    </a>
  );
};

export default MainButton;

import React from 'react';

interface CustomTextProps {
  title: string;
  className?: string;
}

const CustomText: React.FC<CustomTextProps> = ({ title, className  }) => {
  return (
    <div
      className={`leading-tight ${className}`}
    >
      {title}
    </div>
  );
};

export default CustomText;
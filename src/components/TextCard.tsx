import React from "react";

const TextCard = ({
  texts,
}: {
  texts: { id: string; text: React.ReactNode }[];
}) => {
  return (
    <div className="flex flex-col gap-3">
      {texts.map((text) => (
        <p key={text.id} className="text-md text-text-secondary text-regular">
          {text.text}
        </p>
      ))}
    </div>
  );
};

export default TextCard;

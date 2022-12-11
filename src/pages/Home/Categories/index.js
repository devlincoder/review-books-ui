import { memo, useState } from "react";
import clsx from "clsx";
import style from "./Categories.module.scss";

const Categories = () => {
  const categories = [
    "Trinh thám",
    "Kinh dị",
    "Tâm lí học",
    "Phát triển bản thân",
    "Khác",
  ];

  const [categoriesActive, setCategoriesActive] = useState(0);

  return (
    <div className={clsx(style.title)}>
      {categories.map((x, index) => {
        return (
          <div
            key={index}
            onClick={() => setCategoriesActive(index)}
            className={
              categoriesActive === index
                ? clsx(style.category, style.categoryActive)
                : clsx(style.category)
            }
          >
            {x}
          </div>
        );
      })}
    </div>
  );
};

export default memo(Categories);

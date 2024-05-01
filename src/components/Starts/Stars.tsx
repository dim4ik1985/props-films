import { FC } from "react";
import "./stars.css";

import { Star } from "../Star";

interface StarsProps {
  count: number;
}
export const Stars: FC<StarsProps> = ({ count }) => {
  return (
    <>
      {count >= 1 && count <= 5 && true ? (
        <ul className="card-body-stars u-clearfix">
          {[...Array(count)].map((_, index) => (
            <Star key={index} />
          ))}
        </ul>
      ) : null}
    </>
  );
};

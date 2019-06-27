import { Like } from "./like.component";

let likeComponent = new Like(10, true);
likeComponent.onClick();
console.log(
  `Like counts: ${likeComponent.count}, been selected: ${likeComponent.lighted}`
);

likeComponent.onClick();
console.log(
  `Like counts: ${likeComponent.count}, been selected: ${likeComponent.lighted}`
);

likeComponent.onClick();
console.log(
  `Like counts: ${likeComponent.count}, been selected: ${likeComponent.lighted}`
);

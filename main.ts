import { Like } from "./like.component";

let likeComponent = new Like(10, true);
likeComponent.onClick();
console.log(
  `Like counts: ${likeComponent._count}, been selected: ${
    likeComponent._lighted
  }`
);

likeComponent.onClick();
console.log(
  `Like counts: ${likeComponent._count}, been selected: ${
    likeComponent._lighted
  }`
);

likeComponent.onClick();
console.log(
  `Like counts: ${likeComponent._count}, been selected: ${
    likeComponent._lighted
  }`
);

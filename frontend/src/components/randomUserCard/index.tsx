import { StyledLi } from "./style";

interface Iprops {
  image: string;
  name: string;
  email: string;
  username: string;
  age: number;
}

export default function RandomUserCard({ image, name, email, username, age }: Iprops) {
  return (
    <StyledLi>
      <div className="img">
        <img src={image} alt="image_url" />
      </div>
      <div className="descricao">
        <h4>{name}</h4>
        <h4>{email}</h4>
        <h4>{username}</h4>
        <h4>{age}</h4>
      </div>
    </StyledLi>
  );
}

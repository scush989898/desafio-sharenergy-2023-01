import { TableCell, TableRow, CardMedia } from "@mui/material";

interface Iprops {
  image: string;
  name: string;
  email: string;
  username: string;
  age: number;
}

export default function RandomCard({ image, name, username, email, age }: Iprops) {
  return (
    <TableRow>
      <TableCell align="center">
        <CardMedia image={image} component="img" height="90" sx={{ borderRadius: "10%" }} />
      </TableCell>
      <TableCell align="center">{name}</TableCell>
      <TableCell align="center">{email}</TableCell>
      <TableCell align="center">{username}</TableCell>
      <TableCell align="center">{age}</TableCell>
    </TableRow>
  );
}

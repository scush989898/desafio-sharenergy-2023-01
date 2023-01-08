import { TableCell, TableRow, CardMedia } from "@mui/material";
import { IRandomCustomUser } from "../../interfaces/general.interface";

export default function RandomCard({ image, name, username, email, age }: IRandomCustomUser) {
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

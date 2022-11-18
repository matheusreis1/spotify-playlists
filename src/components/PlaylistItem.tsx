import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardMedia } from '@mui/material';

export default function PlaylistItem({name, image}: {name: string; image: string}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={image}
        alt="playlist image"
      />
      <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            little description
          </Typography>
        </CardContent>
      <CardActions>
        <Button size="small">Ver músicas</Button>
      </CardActions>
    </Card>
  );
}
import Grid from '@mui/material/Unstable_Grid2';
import PlaylistItem from './PlaylistItem';

export function PlaylistList() {
  return (
    <Grid container spacing={2}>
      <Grid xs={2} minWidth={20}>
        <PlaylistItem name='xs8' image=''></PlaylistItem>
      </Grid>
      <Grid xs={2}>
        <PlaylistItem name='xs4' image=''></PlaylistItem>
      </Grid>
      <Grid xs={2}>
        <PlaylistItem name='xs4' image=''></PlaylistItem>
      </Grid>
      <Grid xs={2}>
        <PlaylistItem name='xs8' image=''></PlaylistItem>
      </Grid>
    </Grid>
  )
}
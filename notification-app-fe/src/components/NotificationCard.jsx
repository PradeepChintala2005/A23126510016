import {
  Card,
  CardContent,
  Typography,
  Chip,
  Stack,
} from "@mui/material";

export function NotificationCard({ notification }) {
  return (
    <Card>
      <CardContent>
        <Stack spacing={1}>
          <Chip
            label={notification.type}
            size="small"
          />

          <Typography variant="body1">
            {notification.message}
          </Typography>

          <Typography
            variant="caption"
            color="text.secondary"
          >
            {notification.timestamp}
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
}
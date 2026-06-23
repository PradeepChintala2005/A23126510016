const API_URL =
  "http://4.224.186.213/evaluation-service/notifications";

const TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJjaGludGFsYXByYWRlZXBrdW1hci4yMy5jc2VAYW5pdHMuZWR1LmluIiwiZXhwIjoxNzgyMjAxMDYyLCJpYXQiOjE3ODIyMDAxNjIsImlzcyI6IkFmZm9yZCBNZWRpY2FsIFRlY2hub2xvZ2llcyBQcml2YXRlIExpbWl0ZWQiLCJqdGkiOiJmNTAzZGMxZi0zMTNmLTQ0MzItYjVjYS01ZDI4OWI2M2FlMzIiLCJsb2NhbGUiOiJlbi1JTiIsIm5hbWUiOiJwcmFkZWVwIGt1bWFyIGNoaW50YWxhIiwic3ViIjoiOTlhNTkzY2MtMTMyNy00OWM2LWFiYTAtZWUyNjJkMWZmNDY2In0sImVtYWlsIjoiY2hpbnRhbGFwcmFkZWVwa3VtYXIuMjMuY3NlQGFuaXRzLmVkdS5pbiIsIm5hbWUiOiJwcmFkZWVwIGt1bWFyIGNoaW50YWxhIiwicm9sbE5vIjoiYTIzMTI2NTEwMDE2IiwiYWNjZXNzQ29kZSI6Ik1UcXhhciIsImNsaWVudElEIjoiOTlhNTkzY2MtMTMyNy00OWM2LWFiYTAtZWUyNjJkMWZmNDY2IiwiY2xpZW50U2VjcmV0Ijoiam5aZ2NHdW1hVENYamJ1ayJ9.54hTwKEgQA_HFwAhI9ggU3FjmsIu9NfheXMZX7cFhRI";

export async function fetchNotifications(
  page = 1,
  filter = "All"
) {
  let url = `${API_URL}?page=${page}&limit=10`;

  if (filter !== "All") {
    url += `&notification_type=${filter}`;
  }

  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch notifications");
  }

  return response.json();
}
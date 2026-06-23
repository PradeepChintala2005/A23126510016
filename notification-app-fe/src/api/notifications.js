const API_URL =
  "http://4.224.186.213/evaluation-service/notifications";

const TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJjaGludGFsYXByYWRlZXBrdW1hci4yMy5jc2VAYW5pdHMuZWR1LmluIiwiZXhwIjoxNzgyMjAyNDgyLCJpYXQiOjE3ODIyMDE1ODIsImlzcyI6IkFmZm9yZCBNZWRpY2FsIFRlY2hub2xvZ2llcyBQcml2YXRlIExpbWl0ZWQiLCJqdGkiOiI3NjYxZjRlMi1kYTEwLTQ0MzQtYmM2Zi02NjUyMWEzYjBmNTAiLCJsb2NhbGUiOiJlbi1JTiIsIm5hbWUiOiJwcmFkZWVwIGt1bWFyIGNoaW50YWxhIiwic3ViIjoiOTlhNTkzY2MtMTMyNy00OWM2LWFiYTAtZWUyNjJkMWZmNDY2In0sImVtYWlsIjoiY2hpbnRhbGFwcmFkZWVwa3VtYXIuMjMuY3NlQGFuaXRzLmVkdS5pbiIsIm5hbWUiOiJwcmFkZWVwIGt1bWFyIGNoaW50YWxhIiwicm9sbE5vIjoiYTIzMTI2NTEwMDE2IiwiYWNjZXNzQ29kZSI6Ik1UcXhhciIsImNsaWVudElEIjoiOTlhNTkzY2MtMTMyNy00OWM2LWFiYTAtZWUyNjJkMWZmNDY2IiwiY2xpZW50U2VjcmV0Ijoiam5aZ2NHdW1hVENYamJ1ayJ9.gluKAx9fe5PDHuSWnEaSwTSGK6Tf6uLyliOC3phEX4w";

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
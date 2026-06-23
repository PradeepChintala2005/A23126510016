const LOG_API =
  "http://4.224.186.213/evaluation-service/logs";

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJjaGludGFsYXByYWRlZXBrdW1hci4yMy5jc2VAYW5pdHMuZWR1LmluIiwiZXhwIjoxNzgyMTk5Njk0LCJpYXQiOjE3ODIxOTg3OTQsImlzcyI6IkFmZm9yZCBNZWRpY2FsIFRlY2hub2xvZ2llcyBQcml2YXRlIExpbWl0ZWQiLCJqdGkiOiIzZTZlMzAwMS00NjdjLTQyZDQtYTA0Ny1hOTRhNTlkNDVkNGEiLCJsb2NhbGUiOiJlbi1JTiIsIm5hbWUiOiJwcmFkZWVwIGt1bWFyIGNoaW50YWxhIiwic3ViIjoiOTlhNTkzY2MtMTMyNy00OWM2LWFiYTAtZWUyNjJkMWZmNDY2In0sImVtYWlsIjoiY2hpbnRhbGFwcmFkZWVwa3VtYXIuMjMuY3NlQGFuaXRzLmVkdS5pbiIsIm5hbWUiOiJwcmFkZWVwIGt1bWFyIGNoaW50YWxhIiwicm9sbE5vIjoiYTIzMTI2NTEwMDE2IiwiYWNjZXNzQ29kZSI6Ik1UcXhhciIsImNsaWVudElEIjoiOTlhNTkzY2MtMTMyNy00OWM2LWFiYTAtZWUyNjJkMWZmNDY2IiwiY2xpZW50U2VjcmV0Ijoiam5aZ2NHdW1hVENYamJ1ayJ9.R6YJzU58k0kQzTBSFCfc_3RvKL3Jt3zYWVZltq-XEjo";

export async function Log(
  stack,
  level,
  packageName,
  message
) {
  try {
    await fetch(LOG_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${TOKEN}`,
      },
      body: JSON.stringify({
        stack,
        level,
        package: packageName,
        message,
      }),
    });
  } catch (error) {
    console.error("Logging Failed", error);
  }
}
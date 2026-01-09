import { useEffect, useState } from "react";

export default function GithubAvatar({ username }) {
  const [avatar, setAvatar] = useState("");

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((res) => res.json())
      .then((data) => {
        setAvatar(data.avatar_url);
      })
      .catch((err) => console.error("Erro ao carregar avatar:", err));
  }, [username]);

  if (!avatar) return <p>Carregando foto...</p>;

  return (
    <img
      src={avatar}
      alt={`Foto do GitHub de ${username}`}
      style={{
        width: "160px",
        height: "160px",
        borderRadius: "50%",
        border: "3px solid #fff",
        objectFit: "cover",
      }}
    />
  );
}

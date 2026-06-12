async function loadAniList() {
  const query = `
  query {
    MediaListCollection(
      userName: "notmithun",
      type: ANIME,
      status: CURRENT
    ) {
      lists {
        entries {
          progress
          media {
            episodes
            title {
              english
              romaji
            }
          }
        }
      }
    }
  }
  `;

  try {
    const response = await fetch("https://graphql.anilist.co", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ query }),
    });

    const data = await response.json();

    const anime =
      data?.data?.MediaListCollection?.lists
        ?.flatMap((list) => list.entries)
        ?.map((entry) => {
          const title = entry.media.title.english || entry.media.title.romaji;

          const current = entry.progress ?? "?";
          const total = entry.media.episodes ?? "?";

          return `${title} (${current}/${total})`;
        }) || [];

    document.getElementById("anime_watching_now").textContent = anime.length
      ? anime.join(", ")
      : "Nothing right now";
  } catch (err) {
    document.getElementById("anime_watching_now").textContent =
      "Unable to load";
    console.error(err);
  }
}

loadAniList();

async function loadAniList() {
  const CACHE_KEY = "anilist_currently_watching";
  const CACHE_TIME_KEY = "anilist_cache_time";
  const SIX_HOURS = 21_600_000;
  const now = Date.now();

  const navEntry = performance.getEntriesByType("navigation")[0];
  const isReload = navEntry?.type === "reload";

  if (isReload) {
    localStorage.removeItem(CACHE_KEY);
    localStorage.removeItem(CACHE_TIME_KEY);
  }

  const cachedData = localStorage.getItem(CACHE_KEY);
  const cachedTime = localStorage.getItem(CACHE_TIME_KEY);

  if (cachedData && cachedTime && now - Number(cachedTime) < SIX_HOURS) {
    document.getElementById("anime_watching_now").textContent = cachedData;
    return;
  }

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

    const result = anime.length ? anime.join(", ") : "Nothing right now";

    localStorage.setItem(CACHE_KEY, result);
    localStorage.setItem(CACHE_TIME_KEY, String(now));

    document.getElementById("anime_watching_now").textContent = result;
  } catch (err) {
    console.error(err);

    document.getElementById("anime_watching_now").textContent =
      "Unable to load";
  }
}

loadAniList();

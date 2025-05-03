async function loadSpivanykData() {
  const response = await fetch("api/spivanyk.csv");
  const text = await response.text();
  const rows = text.trim().split("\n");
  const grid = document.getElementById("spivanykGrid");
  for (let i = 1; i < rows.length; i++) {
    const values = parseCSVRow(rows[i]);
    const [numb, name, author, performer, lyricsUrl, youtubeUrl, spotifyUrl] =
      values;
    const card = document.createElement("div");
    card.className = "spivanyk__card";
    const titleEl = document.createElement("h3");
    titleEl.textContent = `${numb}. ${name}`;
    const authorEl = author ? document.createElement("p") : null;
    if (author) authorEl.textContent = `Автор: ${author}`;
    const performerEl = performer ? document.createElement("p") : null;
    if (performer) performerEl.textContent = `Виконавець: ${performer}`;
    const buttonsDiv = document.createElement("div");
    buttonsDiv.className = "spivanyk__buttons";
    if (lyricsUrl) {
      const lyricsLink = `<a href="${lyricsUrl}" target="_blank">Посилання на текст пісні</a>`;
      buttonsDiv.innerHTML += lyricsLink;
    }
    if (youtubeUrl) {
      const youtubeLink = `<a href="${youtubeUrl}" target="_blank">Посилання в ютубі</a>`;
      buttonsDiv.innerHTML += youtubeLink;
    }
    if (spotifyUrl) {
      const spotifyLink = `<a href="${spotifyUrl}" target="_blank">Посилання в спотіфаї</a>`;
      buttonsDiv.innerHTML += spotifyLink;
    }
    card.appendChild(titleEl);
    if (authorEl) card.appendChild(authorEl);
    if (performerEl) card.appendChild(performerEl);
    card.appendChild(buttonsDiv);
    grid.appendChild(card);
  }
}

function parseCSVRow(row) {
  const result = [];
  let current = "";
  let insideQuotes = false;
  for (let i = 0; i < row.length; i++) {
    const char = row[i];
    const nextChar = row[i + 1];
    if (char === '"' && insideQuotes && nextChar === '"') {
      current += '"';
      i++;
    } else if (char === '"') {
      insideQuotes = !insideQuotes;
    } else if (char === "," && !insideQuotes) {
      result.push(current.trim());
      current = "";
    } else {
      current += char;
    }
  }
  result.push(current.trim());
  return result;
}

loadSpivanykData();

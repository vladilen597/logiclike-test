export const loadGames = () => {
  return fetch('https://logiclike.com/docs/courses.json')
    .then((response) => response.json())
    .then((data) => {
      return data
    })
    .catch((error) => console.log(error))
}

export const getFilteredByTagGames = (selectedTags, games) => {
  return games.find((game) =>
    game.tags.some((tag) => selectedTags.includes(tag))
  )
}

export const getTags = (games) => {
  const tags = []
  games.forEach((game) => {
    game.tags.forEach((tag) => {
      if (!tags.includes(tag)) {
        tags.push(tag)
      }
    })
  })
  return tags
}

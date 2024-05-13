# What To Stream Frontend
*Work in progress*

An Angular web app for quick and easy recommendations of what movies or series to watch on which streaming service with filters and sorting based on IMDB and meta score.

## How to run
A mock REST API server is included. Run the script `npm run json-server:start` to serve a demo database located in /mock-db/db.json.

To test the app start the Angular dev server with the script `npm run start`.

## Requirement Specification
- Filters
  - Save different presets (to localStorage)
  - Toggle category: movies or TV series/TV shows
  - Choose country
    - Automatic detection based on IP address location
  - Genre
  - Score
  - Streaming service
    - Netflix, Disney+, HBO Max, Amazon Prime etc.
- Sorting
  - By score
  - Most popular
  - Be release year
  - Alphabetical
  - Random (button to shuffle)
  - Group by streaming service, genre, year
- Search
  - Title
  - Genre
- Movie / series page
  - Name, genre, release year
  - Picture
  - Available on which streaming services
  - Rating on IMDB, Metascore, Rotten Tomatoes
  - Link to open on IMDB
  - Synopsis
  - Click to toggle as "seen" (movie) / "seen all" (series)
  - Quick save button to a "Favourites" list
  - Save to different lists
    - Shortcut to create a new list
- User profile
  - Login (via Firebase?)
  - Perhaps a temporary solution that saves lists to localStorage
  - Features:
      - Create new list
        - Suggest name, e.g. "Horror", "Sci-Fi", "Classics"
      - Rename list
      - Delete list
      - Duplicate list
      - Share list
      - Reorder items
      - Remove items

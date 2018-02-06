* Users can create 5x5 bingo cards with book categories on them.
* When creating a card, users can select from default book genres.
* When creating a card, users can create custom categories instead of using the default genres.
* When adding custom categories, users can also add a list of recommended books for each category.
* Users can browse bingo cards others have created.
* Users can sign up to play a bingo card.
* When a user clicks on a genre, they get a list of recommended books.
* When a user clicks on a card square, they can look up the book they read and add it to the square.
* When a user reads one book they get one point, when they get bingo they get ten points, when they get blackout they get 50 points.

Models:
Card has many Genres, Genre has many Cards
User has many CreatedCards, CreatedCard has one User
User has many PlayedCards, PlayedCard has many Users

Card
* title
* user_id

Genre
* name
* default (bool)

CardGenre
* card_id
* genre_id

User
* username
* email
* password_hash
* points

UserCardGenre
* card_genre_id
* user_id
* book_id

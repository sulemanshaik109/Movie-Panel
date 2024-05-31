<h1 align="center">
Movie App
</h1>
Welcome to MoviePanel, a React-based web application that provides movie enthusiasts with access to information about their favorite movies. Our platform features a sleek user interface with multiple pages, each dedicated to a different category of movies with pagination, and a global search function for easy navigation.

## Project Walk-Through

### Home/Popular Page

<div style="text-align: center;">
     <img src="https://res.cloudinary.com/dsbxrn2tj/image/upload/v1717054866/home_cagdx2.png" alt="home-page">
</div>
<br/>

### Top-rated Page

<div style="text-align: center;">
     <img src="https://res.cloudinary.com/dsbxrn2tj/image/upload/v1717055028/top-rated_gybybx.png" alt="home-page">
</div>
<br/>

### Upcoming Page

<div style="text-align: center;">
     <img src="https://res.cloudinary.com/dsbxrn2tj/image/upload/v1717055207/upcoming_rutocs.png" alt="home-page">
</div>
<br/>

### Search Results Page

<div style="text-align: center;">
     <img src="https://res.cloudinary.com/dsbxrn2tj/image/upload/v1717135978/search-result_dmm2ui.png" alt="home-page">
</div>
<br/>

### Movie Details Page

<div style="text-align: center;">
     <img src="https://res.cloudinary.com/dsbxrn2tj/image/upload/v1717055592/movie-details_mbfrqo.png" alt="home-page">
</div>
<br/>

### Cast of the movie

<div style="text-align: center;">
     <img src="https://res.cloudinary.com/dsbxrn2tj/image/upload/v1717055779/cast_tb5nsr.png" alt="home-page">
</div>
<br/>

### Features

- **Home/Popular Page**: Discover the most popular movies, handpicked and updated regularly.
- **Top-Rated Page**: Browse movies with the highest ratings from moviegoers and critics alike.
- **Upcoming Page**: Stay ahead with a preview of movies that are set to hit the theaters soon.
- **Search Results Page**: Find any movie in our database with our powerful search feature.
- **Movie Details Page**: Get in-depth details, including synopses, cast information, and more for each movie.
- **Header**
  - Header includes
    - <strong><em>Logo</em></strong>: It redirects you to the home page whenever you click it.
    - <strong><em>Categories Links</em></strong>: When a link is clicked, it redirects you to the specific category page. For example, if you click on the top-rated link the page will redirect to top-rated page and displays the top-rated movies.
    - <strong><em>Global Search</em></strong>: Quickly search for movies from any page using the search bar in the navbar.
    - <strong><em>Search Button</em></strong>: It redirects you to the search results page and display the searched movied.

### Technology Used

I have built this project using the following tools & techniques:

- React.JS
- React Router v6
- axios
- JSX
- Class Components
- Functional Components
- React Hooks
- useState
- useNavigate
- useParams
- useLocation
- withRouter
- Global Search
- EsLint.
- Github Actions.

### How to use

- Clone the repo
  ```
  git clone https://github.com/sulemanshaik109/Nimap-Movie-App.git
  ```
- Install Dependencies
  ```
  npm install
  ```
- Run the app
  ```
  npm start
  ```
- Navigate to `http://localhost:3000` to view the application in the browser.

### Resources

<details>
<summary>API URLs</summary>
<br/>

API Key: **c45a857c193f6302f2b5061c3b85e743**

**Get All Videos API Url**

```
https://api.themoviedb.org/3/movie/popular?api_key=${Api_key}&language=en-US&page=1
```

**Get Top-rated Videos API Url**

```
https://api.themoviedb.org/3/movie/top_rated?api_key=${Api_key}&language=en-US&page=1
```

**Get Upcoming Videos API Url**

```
https://api.themoviedb.org/3/movie/upcoming?api_key=${Api_key}&language=en-US&page=1
```

**Get Search Videos API Url**

```
https://api.themoviedb.org/3/search/movie?api_key=${Api_key}&language=en-US&query=${movie_name}&page=1
```

**Get Movie Details API Url**

```
https://api.themoviedb.org/3/movie/${movie_id}?api_key=${Api_key}&language=en-US
```

**Get Movie Cast Detail API Url**

```
https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=${Api_key}&language=en-US
```

</details>

<details>
<summary>Image URLs</summary>
<br/>

**Image Url**

```
https://image.tmdb.org/t/p/w500${image_url}
```

</details>

<details>
<summary>Colors</summary>
<br/>

<div style="background-color: #343a3f; width: 150px; padding: 10px; color: white">Hex: #343a3f</div>
<div style="background-color: #d2d4d2; width: 150px; padding: 10px; color: white">Hex: #d2d4d2</div>
<div style="background-color: #838784; width: 150px; padding: 10px; color: white">Hex: #838784</div>
<div style="background-color: #f1f5f9; width: 150px; padding: 10px; color: black">Hex: #f1f5f9</div>
<div style="background-color: #b1b6ba; width: 150px; padding: 10px; color: black">Hex: #b1b6ba</div>
<div style="background-color: #6c757d; width: 150px; padding: 10px; color: black">Hex: #6c757d</div>
<div style="background-color: #282c34; width: 150px; padding: 10px; color: black">Hex: #282c34</div>
<div style="background-color: #272c34; width: 150px; padding: 10px; color: black">Hex: #272c34</div>
<div style="background-color: #020b17; width: 150px; padding: 10px; color: black">Hex: #020b17</div>
<div style="background-color: #7ca9dd; width: 150px; padding: 10px; color: black">Hex: #7ca9dd</div>
<div style="background-color: #f6e9e9; width: 150px; padding: 10px; color: black">Hex: #f6e9e9</div>
<div style="background-color: #393939; width: 150px; padding: 10px; color: black">Hex: #393939</div>
<div style="background-color: #d0e6ff; width: 150px; padding: 10px; color: black">Hex: #d0e6ff</div>
<div style="background-color: #edfafd; width: 150px; padding: 10px; color: black">Hex: #edfafd</div>

</details>

<details>
<summary>Font-families</summary>

- Roboto

</details>

# Show Your Support

Give a ⭐️ if you like this project!

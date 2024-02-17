# NextJS Headless WordPress Starter (App Router)

## Setup

### WordPress setup

- Install Graphql plugins:
  - [Wordpress Graphql Plugin](https://wordpress.org/plugins/wp-graphql/) (Ensure `Enable Public Introspection` is enabled in settings)
  - [ACF graphql plugin](https://wordpress.org/plugins/wpgraphql-acf/) (optional, if using ACF)
- Set WordPress URLs correctly in Settings -> General
  - `WordPress Address (URL)` should be the URL of your wordpress install
  - `Site Address (URL)` should be the URL of your NextJS install
- Set permalinks to be `Post name`
- Ensure your auth cookie is shared with the frontend by setting `COOKIE_DOMAIN` in your wp-config.php to start with a `.` (Note: this assumes your frontend/wordpress are on the same domain):
  ```php
  define('COOKIE_DOMAIN', '.yourdomain.com');
  ```
- Add this filter to your functions.php to use the correct preview URLs
  ```php
  function headless_preview_link($link, $post) {
    return "/api/preview?type=$post->post_type&id=$post->ID";
  }
  add_filter('preview_post_link', 'headless_preview_link', 10, 2);
  ```

### NextJS setup

- Create a `.env` file in the root of the project with a WORDPRESS_URL variable pointing the base url of your wordpress install

## Features

### Implemented

- NextJS App Router
- Typescript type generation for Graphql queries
- Tailwind
- ESLint & Prettier
- WordPress previews

### To do

- Static site generation
- Incrememntal static site generation
- Gravity Forms support

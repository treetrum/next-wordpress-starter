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
- Add the following to your `functions.php` to enable full previews & cache revalidation

  ```php
  // Modify preview URLs
  add_filter('preview_post_link', function ($link, $post) {
      $frontend_url = get_option('home');
      return "$frontend_url/api/preview?type=$post->post_type&id=$post->ID";
  }, 10, 2);

  // Revalidate path for each page/post that gets updated
  add_action('post_updated', function ($post_id) {
      $frontend_url = get_option('home');
      $url = "$frontend_url/api/revalidate/path?path=" . get_page_uri($post_id);
      wp_remote_get($url);
  }, 10, 3);

  // Revalidate settings cache whenever an option is updated
  add_action('update_option', function () {
      $frontend_url = get_option('home');
      $url = "$frontend_url/api/revalidate/tag?tag=settings";
      wp_remote_get($url);
  }, 10, 0);
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
- Next Cache + revalidation

### To do

- Static site generation
- Incrememntal static site generation
- Gravity Forms support

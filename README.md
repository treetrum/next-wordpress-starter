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

### NextJS setup

- Create a `.env` file in the root of the project with a WORDPRESS_URL variable pointing the base url of your wordpress install

## Features

### Implemented

- NextJS App Router
- Typescript type generation for Graphql queries
- Tailwind
- ESLint & Prettier

### To do

- WordPress preview
- Gravity Forms support

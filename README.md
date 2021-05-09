# My attempt to add takeshape as CMS with gatsby

Integrate TakeShape CMS using a ready to go TakeShape project!

This starter is based on the Startup example that you can choose when creating a new project in the TakeShape CMS.

## 🚀 Quick start

1.  **Create a Gatsby site.**

    Use the [Gatsby CLI](https://www.gatsbyjs.org/docs/gatsby-cli/) to create a new site, specifying the default starter.

    ```shell
    # create a new Gatsby site using the default starter created by Colby Fayock
    gatsby new my-startup-project https://github.com/colbyfayock/gatsby-starter-takeshape-startup
    cd my-startup-project/
    ```

    Note: you must have the Gatsby CLI installed. [Learn how to install the Gatsby CLI](https://www.gatsbyjs.org/docs/gatsby-cli/#how-to-use-gatsby-cli).

1.  **Create a new TakeShape project.**

    [Sign up for a free TakeShape account](https://app.takeshape.io/signup) and [create a project](https://app.takeshape.io/projects) using the "Shape Startup" template.

    [https://app.takeshape.io/signup](https://app.takeshape.io/signup)

1.  **Create an environment file.**

    Inside `my-startup-project`, create a new file called `.env`. In this file, you want to include 2 enviornment files that you will use to add your TakeShape project ID and access key.

    ```shell
    # Inside .env
    TAKESHAPE_PROJECT="[TakeShape Project ID]"
    TAKESHAPE_API_KEY="[TakeShape API Access Key]"
    ```

    [Learn how to create an API key](https://www.takeshape.io/docs/creating-an-api-key/).

1.  **Start developing.**

    Start it up.

    ```shell
    gatsby develop
    ```

1.  **Start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

    Open the `my-default-starter` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!

## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── node_modules
    ├── src
    ├── static
    ├── .gitignore
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── LICENSE
    ├── package.json
    ├── README.md
    └── yarn.lock

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

1.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

1.  **`/static`**: This directory will constain static assets including favicon image files and a `humans.txt` file that you can update for your project.

1.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

1.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).

1.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

1.  **`LICENSE`**: This starter is licensed under the MIT license.

1. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

1. **`README.md`**: A text file containing useful reference information about your project.

1. **`yarn.lock`** (See `package.json` above, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

## 📚 More Resources to Get Started
* [Quickly Create a New Company Website Managed by a CMS with TakeShape and Gatsby](https://egghead.io/playlists/quickly-create-a-new-company-website-managed-by-a-cms-with-takeshape-and-gatsby-4e4d?af=atzgap) (egghead.io)

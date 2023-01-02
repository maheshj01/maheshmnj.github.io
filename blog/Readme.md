### jekyll commands
This will create a new Jekyll site at ./my-awesome-site. Go into your new directory:
```bash
jekyll new my-awesome-site
cd my-awesome-site
```

Build the site on the preview server:
```bash
bundle exec jekyll serve --livereload
```

### Drafts are stored under _drafts to see all drafts run:

```bash
jekyll serve --drafts
```

### To see all posts run:

```bash
jekyll serve --posts
```


### Adding a new theme 

To install a theme named `gem "jekyll-theme-hacker"` add the following to your Gemfile:

```bash
gem "jekyll-theme-hacker"
```

Then run `bundle install` to install the theme.

To use the theme, add the following to your site’s `_config.yml`:

```bash
theme: jekyll-theme-hacker
```
Note: To add layouts specific to the theme, create a directory called `_layouts` in your site and add the layouts there. For more information, see [Overriding theme defaults](https://jekyllrb.com/docs/themes/#overriding-theme-defaults).



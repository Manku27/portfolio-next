```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# Problems

1. My system is set on Node 16.15.1 as per my office requirements but Next14 needs >= v18.17.0.
   The two possible options that come up are NVM - node version manager or something to do with Docker.
   I am chosing docker because I need more experience with it.
   PS. I am not using docker for deployment, I am using it for development, so it should be a little unconventional.

   Docker has one problem, of hot reloading. I did set it up, with a Dockerfile, docker compose file and a dockerignore, but it still needed polling to be started in the next config file.

   I am exploring NVM next, which can leavarage the next-dev environment much better.

2. Embedding isnt smooth.
   I tried Linkedin, twitter and medium.
   Medium - no outright way, exposes some Rss way, did not seem maintainable.
   Linkedin - gives an Iframes option,but does not work. The DOM nodes seem fine though.
   Twitter - exposes a blockquote, but vercel suggests the `next-tweet` package which just needs tweet-id, works fine for now.

# What I want

Home - should be same as about me

Talking tech - my embedded linkedin/tweets/blogs
Personnel (non tech discussions) - maybe embedded instagram/tweets

These two are the same. So I can use the same page for now, will customize a layout for personal in the future if need be.

How do I edit ? embed new posts

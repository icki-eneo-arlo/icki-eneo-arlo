# Icki Eneo Arlo

This website is built on Gatsby. It is hosted via Github Pages. The `main` branch is used to track the files served to the public — it only contains the built gatsby site. The source of the site is in the `source` branch.

## How it works

This app's basic function is to present a video full screen. You must supply an array of video sources (which can either be Vimeo embeds or MP4 videos for the native HTML video player) that are different sizes. The app will pick which source best fits the user's viewport. The app will scale the player to cover the entire display. If the video has an area that should not be automatically cropped, you can define the boundaries of the area with `cropSafeWidth` and `cropSafeHeight` options. Record those dimensions at the same scale as the video's native size. The crop safe region must always be centered. 

## Local development

```sh
git checkout source
yarn start
```

## Deploying

```sh
yarn deploy
```
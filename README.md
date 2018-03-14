## This is a fork of Browserosaurus

**browsers.menu** is a fork of [Browserosaurus](https://will-stone.github.io/browserosaurus/) by [Will Stone](http://wstone.io/) to suits my own needs.

> Browserosaurus is an open-source (MIT license), Electron-based browser prompter for macOS. It works by setting itself as the default browser; any clicked links in non-browser apps are now sent to Browserosaurus where it’ll present you with a menu of all your installed browsers. You may now decide which browser you’d like to continue opening the link with.

I highly recommends you to try [Browserosaurus](https://will-stone.github.io/browserosaurus/) first, as it's more actively maintained, and towards every credits for this app should go.

# **browsers.menu**

**browsers.menu** main differences with Browserosaurus is that the browserPicker window will not pop before 300ms, giving you the time to double click a link, to open it in **browsers.menu** defined default browser.

A right click on the tray icon will pop up the menu, letting you access to preferences, or quit the app. While the left-click is used to pop the browser picker, which can open/tabTo browser without specifying url.

On the browserPicker window, you can also click on a button to copy url in the clipboard.

## Future

The plan is to make browsers.menu available to linux & windows.

For the moment, it's working only on OSX.

I also want to implements some developpers related tools, but it may takes a lot of time.
- make XCode IPhone simulator (starts and) opens the clicked url (OSX only).
- open links in Virtualbox/VMWare OS (genyMotion also).
- use modifier keys to open the developpers tools (maybe directly the responsive view).
- use other modifier keys to open the links in incognito mode.

## Development

Get repo:

```
git clone git@github.com:long-lazuli/browsers.menu.git
```

Move to folder:

```
cd browsers.menu
```

Install dependencies:

```
yarn install
```

Run browsers.menu in dev mode:

```
yarn start
```

Package and make installer:

```
yarn run make
```

### Browser logos

https://github.com/alrra/browser-logos

### Make icon.icns

To build an icns file from `src/images/icon/icon.png`, simply run `yarn run icns`.

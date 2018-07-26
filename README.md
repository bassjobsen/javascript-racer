Javascript Racing with High Scores in the BlockChain
====================================================

An Outrun-style pseudo-3d racing game in HTML5 and Javascript. Your Lap and Race times are saved in the BlockChain. This game is a decentralized application (Dapp) based on the Asch sidechain Dapp SDK now. A Dapp that communicate with the Asch mainchain for demostration purposes only.

![Game Screen](https://github.com/bassjobsen/javascript-racer/blob/master/images/game.png)

How to install
==============

## Install Asch first

```
# clone asch
git clone https://github.com/aschplatform/asch.git asch && cd asch && npm install && cd ..
```

## Install the source code
```
git clone https://github.com/bassjobsen/javascript-racer.git
```
After that navigate to the new `javascript-racer` folder and follow the instruction at [Dapp Development Tutorial 1: Asch Dapp Hello World](https://github.com/AschPlatform/asch-docs/blob/master/dapp/hello_world/en.md). Or simply run [asch-redeploy](https://github.com/AschPlatform/asch-redeploy):

```
> sudo npm -g install asch-redeploy
> cd asch-test-dapp
> asch-redeploy
```

DAPP FUTURE
===========
 * create a new game asset
 * let people win assets when they got a new high score (overall, weekly and daily based)
 * ...


GAME FUTURE
===========

It's quite astounding what it takes to actually [finish](http://codeincomplete.com/posts/2011/9/21/defining_finished/)
a game, even a simple one. And this is not a project that I plan on polishing into a finished state. It should
really be considered just how to get started with a pseudo-3d racing game.

If we were to try to turn it into a real game we would have to consider:

 * car sound fx
 * better synchronized music
 * full screen mode
 * HUD fx (flash on fastest lap, confetti, color coded speedometer, etc)
 * more accurate sprite collision
 * better car AI (steering, braking etc)
 * an actual crash when colliding at high speed
 * more bounce when car is off road
 * screen shake when off-road or collision
 * throw up dirt particles when off road
 * more dynamic camera (lower at faster speed, swoop over hills etc)
 * automatic resolution & drawDistance detection
 * projection based curves ? x,y rotation
 * sub-pixel aliasing artifacts on curves
 * smarter fog to cover sprites (blue against sky, cover sprites)
 * multiple stages, different maps
 * a lap map, with current position indicator
 * road splits and joins
 * day/night cycle
 * weather effects
 * tunnels, bridges, clouds, walls, buildings
 * city, desert, ocean
 * add city of seattle and space needle to background
 * 'bad guys' - add some competetor drivers to race against as well as the 'traffic'
 * different game modes - fastest lap, 1-on-1 racing, collect coins ? shoot bad guys ?
 * a whole lot of gameplay tuning
 * ...
 * ...

A note of [Jake Gordon](https://github.com/jakesgordon) on code structure of the game
=====================================================================================

This project happens to be implemented in javascript (because its easy for prototyping) but
is not intended to demonstrate javascript techniques or best practices. In fact, in order to
keep it simple to understand it embeds the javascript for each example directly in the HTML
page (horror!) and, even worse, uses global variables and functions (OMG!).

If I was building a real game I would have much more structure and organization to the
code, but since its just a racing game tech demo, I have elected to [KISS](http://en.wikipedia.org/wiki/KISS_principle).


Related Links
=============

 * [Lou's Pseudo-3d Page](http://www.extentofthejam.com/pseudo/) - high level how-to guide
 * [Racer 10k](https://github.com/onaluf/RacerJS) - another javascript racing game

License
=======

[MIT](http://en.wikipedia.org/wiki/MIT_License) license.

>> NOTE: the music tracks included in this project are royalty free resources paid for and licensed
from [Lucky Lion Studios](http://luckylionstudios.com/). They are licensed ONLY for use in this
project and should not be reproduced.

>> NOTE: the sprite graphics are placeholder graphics [borrowed](http://pixel.garoux.net/game/44) from the old
genesis version of outrun and used here as teaching examples. If there are any pixel artists out there who want to 
provide original art to turn this into a real game please get in touch!


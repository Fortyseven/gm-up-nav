# What the hell is this?
Now that GitHub CoPilot has a full chat interface in VSCode, just for fun I asked it to "write a GreaseMonkey script to navigate up a level of a URL when the user hits ALT+UP".

I found a couple sketchy extensions to restore this ancient browser behavior, but I'm extremely picky about what extensions I install nowadays given the countless security horror stories.

So I gave it a go, not expecting much and it... did a decent job?! 

Well, I mean, it needed about 5 minutes of tweaking and testing but it got about 75% of the work done.

# Installation
Go find a GreaseMonkey extension (or any of the clones) for your browser, and off you go.

_This has only been tested with Firefox._

# Usage
Literally pressing ALT+UP on any page will navigate you up a level. 

For example: 
- `https://example.com/foo/bar/baz`
- `https://example.com/foo/bar`
- `https://example.com/foo`
- `https://example.com`

Worth noting that many pages will redirect you if you hit a URL they don't like, so it will look like the page is just refreshing. Not much I can do about that. (Though I have some ideas...)

![image](https://github.com/Fortyseven/gm-up-nav/assets/156409/dd9b61ad-8668-4686-bce1-8f778ef188c6)

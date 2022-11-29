# REMIND - LazyImages

Ein Typescript Modul für einen LazyLoad von Bildern.

![remind-badge](https://img.shields.io/badge/author-REMIND-black.svg?style=flat-square)
![typescript-badge](https://img.shields.io/badge/TypeScript-3.8.3-green.svg?style=flat-square)
![license-badge](https://img.shields.io/badge/license-BSD--3--Clause-blue.svg?style=flat-square)
![version-badge](https://img.shields.io/badge/version-1.0.0-lightgrey.svg?style=flat-square)

--------------------------------------------------------------------------------

## Table of contents

- [Autoren](#autoren)
- [Installation](#installation)
- [Benutzung](#benutzung)

--------------------------------------------------------------------------------
## Autor
- REMIND GmbH - <technik@remind.de>
- Michael Didion - <m.didion@remind.de>


--------------------------------------------------------------------------------

## Installation

Zum Einbinden des TypeScript Moduls muss folgende Abhängigkeit in den Dependencies
einer package.json eingetragen werden.

```"@remindgmbh/lazyimages": "git+ssh://git@bitbucket.org:remindgmbh/remind-lightbox.git#1.0.0"```

--------------------------------------------------------------------------------

## Benutzung 
```
### HTML Markup
<img class="lazyImage" 
    src="" 
    srcset="" 
    data-src="test-bild.png" 
    data-srcset="test-srcset.png 768w, test-src.png" />
    
### Remind ViewHelper 
<rvh:image src="..." lazymode="1" />

### Typscript
initLazyLoad();
```

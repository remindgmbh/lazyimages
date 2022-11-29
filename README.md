# REMIND - LazyImages

Lazy loading images.

## Usage

Create image tag with theese parameters.

```html
<img
    class="lazyImage"
    src=""
    srcset=""
    data-src="test-bild.png"
    data-srcset="test-srcset.png 768w, test-src.png"/>
```

Initialize lazy loading somewhere in your script.

```typescript
import { initLazyLoad } from "@remindgmbh/lazyimages"

initLazyLoad()
```

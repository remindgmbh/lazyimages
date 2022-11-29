let lazyImageObserver: IntersectionObserver

const CLASS_LAZYIMAGE: string = "lazyImage"
const CLASS_OBSERVE: string = "observe"
const CLASS_LOADED: string = "loaded"

const DATA_SRC: string = "src"
const DATA_SRCSET: string = "srcset"

/**
 * Set image from data attribute in src or srcset
 *
 * @param image
 */
function preloadImage (image: HTMLImageElement): void {

    const src: string | undefined = image.dataset[DATA_SRC]
    const srcset: string | undefined = image.dataset[DATA_SRCSET]

    image.classList.remove(CLASS_OBSERVE)
    image.classList.add(CLASS_LOADED)

    if (src !== undefined) {
        image.setAttribute("src", src)
    }

    if (srcset !== undefined) {
        image.setAttribute("srcset", srcset)
    }
}

/**
 *
 * @param entries
 */
function onIntersection (entries: IntersectionObserverEntry[]): void {

    // Loop through the entries
    entries.forEach((entry) => {
        // Are we in viewport?
        if (entry.intersectionRatio > 0) {
            // Stop watching and load the image
            lazyImageObserver.unobserve(entry.target)
            preloadImage(<HTMLImageElement>entry.target)
        }
    })
}

export function initLazyLoad (): void {
    const images: NodeListOf<HTMLImageElement> = document.querySelectorAll("img." + CLASS_LAZYIMAGE)

    // Instantiate IntersectionObserver as observer
    if (("IntersectionObserver" in window)) {
        // It is supported, load the images
        lazyImageObserver = new IntersectionObserver(onIntersection, {
            // If the image gets within 50px in the Y axis, start the download.
            rootMargin: "50px 0px",
            threshold: 0.01
        })

        // Observe lazy images
        images.forEach(function (image) {
            lazyImageObserver.observe(image)
            image.classList.add(CLASS_OBSERVE)
        })

        // IntervalCheck for new lazy load images
        setInterval(() => {
            // Get all not loaded and not observed images
            const images: NodeListOf<HTMLImageElement>
                = document.querySelectorAll("img." + CLASS_LAZYIMAGE + ":not(." + CLASS_LOADED + "):not(." + CLASS_OBSERVE + ")")

            if (images.length > 0) {
                for (let i = 0; i < images.length; i++) {
                    const image = images[i]

                    if (image !== undefined) {
                        lazyImageObserver.observe(image)
                        image.classList.add(CLASS_OBSERVE)
                    }
                }
            }
        }, 1000)
    } else {
        // If we don"t have support for intersection observer, load the images immediately
        for (let i = 0; i < images.length; i++) {

            const image = images[i]

            if (image !== undefined) {
                preloadImage(image)
            }
        }
    }
}

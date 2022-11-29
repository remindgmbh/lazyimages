import { expect } from 'chai'
import { initLazyLoad } from ".."

describe('LazyImages', () => {
    it('should override source before attach', () => {

        let image: HTMLImageElement = document.createElement('img')
        image.classList.add('lazyImage')
        image.dataset['src'] = 'test.png'
        image.dataset['srcset'] = 'test.png'

        document.appendChild(image)

        initLazyLoad()

        let htmlImage: HTMLImageElement | null = document.querySelector('.lazyImage')

        let result: boolean = htmlImage instanceof HTMLImageElement && htmlImage.src.length > 0 && htmlImage.srcset.length > 0

        expect(result).to.equal(true)
    })
})

import { visit } from 'unist-util-visit'

export const rehypeBlurImageWrapper = () => (tree) => {
    visit(tree, 'element', (node, index, parent) => {
        if (node.tagName !== 'img') return
        if (!parent || index == null) return

        const placeholder = node.properties?.['data-placeholder']
        if (!placeholder) return

        const width = node.properties?.['data-width']
        const height = node.properties?.['data-height']
        node.properties.loading = 'lazy'

        const paddingBottom =
            width && height ? `${((height / width) * 100).toFixed(4)}%` : `56.25%`

        delete node.properties['data-placeholder']
        delete node.properties['data-width']
        delete node.properties['data-height']

        node.properties.style = [
            'position: absolute',
            'top: 0',
            'left: 0',
            'width: 100%',
            'height: 100%',
            'object-fit: cover',
            'opacity: 0',
            'transition: opacity 0.5s ease',
        ].join('; ')

        const placeholderSpan = {
            type: 'element',
            tagName: 'span',
            properties: {
                className: ['blur-placeholder'],
                style: [
                    `background-image: url('${placeholder}')`,
                    'background-size: cover',
                    'background-position: center',
                    `padding-bottom: ${paddingBottom}`,
                    'position: relative',
                    'display: block',
                    'opacity: 1',
                    'transition: opacity 0.5s ease',
                ].join('; '),
            },
            children: [],
        }

        const wrapper = {
            type: 'element',
            tagName: 'span',
            properties: {
                className: ['markdown-image-wrapper'],
                style: [
                    'position: relative',
                    'display: block',
                    'overflow: hidden',
                    ...(width ? [`max-width: ${width}px`] : []),
                ].join('; '),
            },
            children: [placeholderSpan, node],  // blur behind, img on top
        }

        parent.children[index] = wrapper
    })
}
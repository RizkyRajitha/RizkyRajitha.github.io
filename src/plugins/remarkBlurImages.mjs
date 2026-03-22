import { visit } from 'unist-util-visit'
import path from 'path'
import sharp from 'sharp'

export const remarkBlurImages = () => async (tree, file) => {
    const tasks = []

    visit(tree, 'image', (node) => {
        const task = (async () => {
            if (!node.url || node.url.startsWith('http')) return

            const mdDir = path.dirname(file.path)
            const fullImagePath = path.resolve(mdDir, node.url)

            try {
                const sharpInstance = sharp(fullImagePath)

                // Get real dimensions for aspect ratio
                const metadata = await sharpInstance.metadata()

                const blurredBuffer = await sharp(fullImagePath)
                    .resize(20, null, { fit: 'inside', withoutEnlargement: true })
                    .blur(12)
                    .jpeg()
                    .toBuffer()

                const base64 = `data:image/jpeg;base64,${blurredBuffer.toString('base64')}`

                node.data = node.data || {}
                node.data.hProperties = node.data.hProperties || {}
                node.data.hProperties['data-placeholder'] = base64
                node.data.hProperties['data-width'] = metadata.width
                node.data.hProperties['data-height'] = metadata.height
            } catch (err) {
                console.warn(`Blur placeholder failed for ${node.url}: ${err.message}`)
            }
        })()
        tasks.push(task)
    })

    await Promise.all(tasks)
}
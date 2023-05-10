import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS, Document, Node } from '@contentful/rich-text-types'
import markdownStyles from './markdown-styles.module.css'
import RichTextAsset from './RichTextAssest'



type CustomMarkdownOptions = (content: Document) => {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node: any) => JSX.Element
  }
}

const customMarkdownOptions: CustomMarkdownOptions = (content) => ({
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node) => (
      <RichTextAsset
        id={node.data.target.sys.id}
        assets={node.content && node.content[0]?.data?.target?.fields}
      />
    ),
  },
})

interface PostBodyProps {
  content?: {
    json: Document,
  }
}

export default function PostBody({ content }: PostBodyProps) {
  console.log(content)
  return (
    <div className="max-w-2xl mx-auto">
      <div className={markdownStyles['markdown']}>
        {content && documentToReactComponents(
          content.json,
          customMarkdownOptions(content.json)
        )}
      </div>
    </div>
  )
}

import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, Document } from "@contentful/rich-text-types";
import markdownStyles from "./markdown-styles.module.css";
import RichTextAsset from "./RichTextAssest";

type CustomMarkdownOptions = (content: any) => {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node: any) => JSX.Element;
  };
};

const customMarkdownOptions: CustomMarkdownOptions = (content: any) => {
  return {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node) => (
        <RichTextAsset
          id={node.data.target.sys.id}
          assets={content.links.assets.block}
        />
      ),
    },
  };
};

interface PostBodyProps {
  content?: {
    json: Document;
  };
}

export default function PostBody({ content }: PostBodyProps) {
  return (
    <div className="max-w-2xl mx-auto">
      <div className={markdownStyles["markdown"]}>
        {content &&
          documentToReactComponents(
            content.json,
            customMarkdownOptions(content)
          )}
      </div>
    </div>
  );
}

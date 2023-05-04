import Image from 'next/image'
import markdownStyles from './markdown-styles.module.css'

type RichTextAssetProps = {
  id: string;
  assets: Array<any>; // Remplacer any par le type d'objet attendu pour assets
}

export default function RichTextAsset({ id, assets }: RichTextAssetProps): JSX.Element | null {
  const asset = assets?.find((asset) => asset.sys.id === id)

  if (asset?.url) {
    return (
      <div>
        <Image src={asset.url} alt={asset.description} layout='responsive' width={asset.width as number} height={asset.height as number}/>
      </div>
    )
  }

  return null
}

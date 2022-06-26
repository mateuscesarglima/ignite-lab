import { CaretRight, FileArrowDown, ImageSquare} from "phosphor-react"


interface cardInfo {
  title: string
  content: string
  iconType: 'FileArrowDown' | 'ImageSquare'
}

const Card = (props: cardInfo) => {
  return (
    <a
            href=""
            className="bg-gray-700 rounded overflow-hidden flex items-stretc gap-6 hover:bg-gray-600 transition-colors"
          >
            <div className="bg-green-700 h-full p-6 flex items-center">
              {props.iconType === 'ImageSquare' ? <ImageSquare size={40}/> : <FileArrowDown size={40}/>}
            </div>
            <div className="py-6 leading-relaxed">
              <strong className="text-2xl">{props.title}</strong>
              <p className="text-sm text-gray-200 mt-2">
              {props.content}
              </p>
            </div>
            <div className="h-full p-6 flex items-center">
              <CaretRight size={24} />
            </div>
          </a>
  )
}

export default Card
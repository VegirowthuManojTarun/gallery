// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {images, updateThumbnail} = props
  const {thumbnailUrl, thumbnailAltText, id} = images
  const onUpdate = () => {
    updateThumbnail(id)
  }
  return (
    <li>
      <button type="button" onClick={onUpdate}>
        <img src={thumbnailUrl} alt={thumbnailAltText} className="img" />
      </button>
    </li>
  )
}

export default ThumbnailItem

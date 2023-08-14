import React,{useState} from 'react'
import Slider from 'react-slick'
export default function Comments() {
  const [comment,setComment]=useState(false)
  const handleComment=()=>{
    if (comment ===false){
      setComment(true)
    }else{
      setComment(false)
    }
  }
  var settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3500,
    
  }
  return (
    <div className='commentsWrapper'>
      <div className='commentsContainer'>
         <h2>comments</h2>
         <div className='commentsHolder'>
          <div className='commentCard'>
              <div className='commentCardImgCotainer'>

              </div>
              <div className='commentCardNameWrapper'>
                <h4>elias Wanyama</h4>
              </div>
              <div>
                <p>cool app</p>
              </div>
          </div>
         </div>
         <div className='leaveCommentWrapper'>
            <h3 onClick={handleComment}>leave comment</h3>
            {comment === true?
            <form>
            <input type='type' placeholder='Name' /><br/>
            <textarea></textarea><br/>
            <button>comment</button>
          </form>:''}
         </div>
      </div>
    </div>
  )
}

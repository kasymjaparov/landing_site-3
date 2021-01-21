import React from 'react'
import "./About.css"
import "./modal-video.min.css"
import ModalVideo from 'react-modal-video'
export default function About() {
    const [isOpen, setOpen] = React.useState(false)
    return (
        <div className="about">
            <div className="about_wrapper">
            <div className="about_title">
          Автоматизируйте свой бизнес
          </div>
          <div className="about_desc">
          Компания «Новая Норма» автоматизирует бизнес-процессы, а так же предоставляет решения, которые помогают бизнесу оптимизировать затраты, увеличивать выручку и формировать своевременные и лучшие предложения для покупателей. Наша миссия сделать работу удобнее и прозрачнее.          </div>
          <div onClick={()=> setOpen(true)} className="about_btn">Youtube</div>
            </div>
            <ModalVideo autoplay={1} allowFullScreen={true} channel='youtube'  isOpen={isOpen} videoId="n8c3KZOp1_Y" onClose={() => setOpen(false)} />
        </div>
      
    )
}

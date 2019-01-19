import React from 'react';

const Card= (props)=>{
return (
<article className='tc dib br3 pd3 ma2 grow bw2 shadow5 ba dark-gray b--black-10 mv4 w-100 h-100 w-50-m w-25-l mw5 '>
  <img src={props.project.image} height={150} width={150} className='db w-100 br2 br--top' alt=''/>
  <div className='pa2 ph3-ns pb3-ns'>
    <div className='dt w-100 mt1'>
      <div className='dtc'>
        <h1 className='f5 f4-ns mv0'>{props.project.title}</h1>
      </div>
     
    </div>
    <p className='f5 lh-copy measure mt2'>
    {props.project.content}
    </p>
    <a className='f6 link dim br3 ph3 pv2 mb2 dib white bg-dark-gray hover-bg-gray' href={props.project.page} target='_blank noopener noreferrer'>LIVE</a>
    <a className='f6 link dim br3 ph3 pv2 mb2 dib white bg-dark-gray hover-bg-gray' href={props.project.repo} target='_blank noopener noreferrer'>REPO</a>
</div>
</article>
			)
	};

export default Card;
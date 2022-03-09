import React from 'react'
import UserCards from './UserCards'

const Card = (props) => {
   // eachUser ===>>> props = [login , avatar_url, html_url]
   const {id , avatar_url, html_url, login}=props;
   return <div key={id} style={{backgroundColor:"lightpink",textAlign:"center"}}>
   <p>{login}</p>
   <img 
   src={avatar_url} 
   alt={login}
   style={{width:"100px",borderRadius:"100px"}}></img>
   <br></br>
   <a 
   href={html_url}>{html_url}</a>
</div>
}


export default Card;

    //     <div key={props.id}
    //         style={{ backgroundColor: "ivory", textAlign='center' }}>
    //         <p>{props.login}</p>
    //         <img src={props.avatar_url} alt={props.id} style={{ width: '100px', width: '100px' }} />
    //         <br></br>
    //         <a href={props.htmlUrl}>{props.htmlUrl}<a/>
    //     </div>

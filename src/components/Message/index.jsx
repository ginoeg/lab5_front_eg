import "./index.css";
 
const Message = ({ senderUser, message }) => {
 const localUser = JSON.parse(localStorage.getItem("user"));
 


 return (
   <div className="message__content__text">
     <div className="message__content__image">
       <img
         width={45}
         src={
           senderUser.name === message.User.name
             ? localUser.profile_url
             : senderUser.profile_url
         }
       />
     </div>
     <div className="message__content__message">
       <p className="c__name">
         {senderUser.name === message.User.name
           ? localUser.name
           : senderUser.name}
       </p>
       {
        senderUser.name === message.User.name
        ? <p className="c__message" style={{ backgroundColor: '#FF8C00'}}>{message.message}</p>
        : <p className="c__message" style={{ backgroundColor: '#FFFF00'}}>{message.message}</p>
       }
     </div>
   </div>
 );
};
 
export default Message;

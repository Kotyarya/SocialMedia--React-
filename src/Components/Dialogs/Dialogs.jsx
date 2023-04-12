import style from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = () => {
  let dialogData = [
    { id: 1, name: "User1" },
    { id: 2, name: "User2" },
    { id: 3, name: "User3" },
    { id: 4, name: "User4" },
    { id: 5, name: "User5" },
    { id: 6, name: "User6" },
  ];

  let messageData = [
    { id: 1, message: "Hello" },
    { id: 2, message: "Hi" },
    { id: 3, message: "Hey" },
    { id: 4, message: "Yo" },
    { id: 5, message: "GG" },
    { id: 6, message: "PRIVET BLYAT" },
  ];
  return (
    <div className={style.dialogs}>
      <div className={style.users}>
        {dialogData.map(item =>
          <DialogItem name={item.name} id={`${item.id}`} />
        )}
      </div>
      <div className={style.dialog}>
      {messageData.map(item => <Message message={item.message} />)}
      </div>
    </div>
  );
};

export default Dialogs;

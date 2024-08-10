import style from "./FriendListItem.module.css";

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <div className={style.container}>
      <img
        src={avatar}
        alt="{name}"
        width="48"
        className={style.FriendListItemImage}
      />
      <p className={style.FriendListItemName}>{name}</p>
      <p className={isOnline ? style.online : style.offline}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
}

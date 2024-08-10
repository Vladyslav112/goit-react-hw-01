import style from "./Profile.module.css";

export default function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={style.container}>
      <div className={style.profile}>
        <img src={image} alt={name} className={style.profileImage} />
        <p className={style.profileName}>{name}</p>
        <p className={style.profileTag}>@{tag}</p>
        <p className={style.profileLoc}>{location}</p>
      </div>
      <ul className={style.profileList}>
        <li className={style.profileItem}>
          <span className={style.stats}>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li className={style.profileItem}>
          <span className={style.stats}>Views</span>
          <span>{stats.views}</span>
        </li>
        <li className={style.profileItem}>
          <span className={style.stats}>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

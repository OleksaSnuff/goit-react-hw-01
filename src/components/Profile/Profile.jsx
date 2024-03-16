import css from "./Profile.module.css";
import clsx from "clsx";
const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={clsx(css["card-wrap"])}>
      <div>
        <img className={css["card-image"]} src={image} alt="User avatar" />
        <p className={css["person-name"]}>{name}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>

      <ul className={css["stats-wrap"]}>
        <li>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </li>

        <li>
          <span>Views</span>
          <span>{stats.views}</span>
        </li>

        <li>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;

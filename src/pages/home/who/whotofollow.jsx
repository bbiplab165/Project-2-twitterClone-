import { useState } from "react";
import { FaUserPlus } from "react-icons/fa";

// import './style.css';
import styles from "./who.module.css";

const allUsers = [
  {
    id: 1,
    name: "Dwayne Johnson  ",
    // verified: <VerifiedIcon/>,
    avatar:
      "https://www.billboard.com/wp-content/uploads/2022/10/the-rock-dwayne-johnson-2021-billboard-1548.jpg?w=942&h=623&crop=1",
    isFollowing: false,
  },
  {
    id: 2,
    name: "Robert Downey Jr",
    avatar:
      "https://images.hindustantimes.com/rf/image_size_630x354/HT/p2/2020/10/21/Pictures/_7e701072-1375-11eb-9315-b00ef9141a48.jpg",
    isFollowing: false,
  },
  {
    id: 3,
    name: "Gal Gadot Justice ",
    avatar:
      "https://www.indiewire.com/wp-content/uploads/2021/04/wonder-woman.png?resize=1280,878",
    isFollowing: false,
  },
  {
    id: 4,
    name: "The Undertaker",
    avatar:
      "https://static-koimoi.akamaized.net/wp-content/new-galleries/2023/02/wwe-undertaker-long-entrance-002.jpg",
    isFollowing: false,
  },
  {
    id: 5,
    name: "Chris Hemsworth ",
    avatar:
      "https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2023/04/1440/810/chris-hemsworth.jpg?ve=1&tl=1",
    isFollowing: false,
  },

  {
    id: 6,
    name: "Emilia Clarke",
    avatar:
      "https://www.thestatesman.com/wp-content/uploads/2018/05/Emilia-Clarke.jpg",
    isFollowing: false,
  },

  {
    id: 7,
    name: "Kit Harington",
    avatar:
      "https://static.standard.co.uk/s3fs-public/thumbnails/image/2017/10/05/17/kitharington0510a.jpg?width=1024&auto=webp&quality=50&crop=968%3A645%2Csmart",
    isFollowing: false,
  },

  //   {
  //     id: 8,
  //     name: 'Maisie Williams',
  //     avatar: "https://pyxis.nymag.com/v1/imgs/ed5/364/c18d2818d5ab2c211bf83eeabe5f31042d-21-maisie-williams.rsquare.w330.jpg",
  //     isFollowing: false,
  //   },

  //   {
  //     id: 9,
  //     name: 'Keanu Reeves ',
  //     avatar: "https://hips.hearstapps.com/hmg-prod/images/8-1637611978.jpg?resize=2048:*",
  //     isFollowing: false,
  //   },
];
// console.log(allUsers)
const WhoToFollow = () => {
  const [showMore, setShowMore] = useState(false);
  const [users, setUsers] = useState(allUsers.slice(0, 3));
  const [isFollowing, setIsFollowing] = useState(false);

  //   const handleFollow = (userId,) => {
  //     console.log(`Follow user ${userId}`);
  //     // <link rel="stylesheet" href="https://twitter.com/TheRock" />;
  //   };

  //   const handleFollow = (userId) => {
  //     console.log(`Follow user ${userId}`);
  //     window.location.href = `https://twitter.com/TheRock/${userId}`;
  //   };

  const handleFollow = (userId) => {
    // setUsers((prevState) =>
    //   prevState.map((user) =>
    //     user.id === userId ? { ...user, isFollowing: true } : user
    //   )
    // );
    setUsers((prevState) =>
      prevState.map((user) =>
        user.id === userId ? { ...user, isFollowing: true } : user
      )
    );
    // setIsFollowing(true)
  };

  const handleShowMore = () => {
    const newUsers = showMore ? allUsers.slice(0, 3) : allUsers;
    setUsers(newUsers);
    setShowMore(!showMore);
  };

  return (
    <div className={styles.who_to_follow}>
      <h2 className={styles.who_to_follow_heading}>Who to Follow</h2>

      <ul className={styles.who_to_follow_list}>
        {users.map((user) => (
          <li key={user.id} className={styles.who_to_follow_item}>
            <img
              src={user.avatar}
              alt={user.name}
              className={styles.who_to_follow_avatar}
            />
            <div className={styles.who_to_follow_info}>
              <span className={styles.who_to_follow_name}>{user.name}</span>
              {!user.isFollowing ?(
                
                <button
                  onClick={() => handleFollow(user.id)}
                  className={styles.who_to_follow_button}
                >
                  <FaUserPlus className={styles.followIcon} /> Follow
                </button>
              ) : (
                <button
                  onClick={() => handleFollow(user.id)}
                  className={styles.who_to_follow_button}
                >
                  <FaUserPlus className={styles.followIcon} /> Following
                </button>
              )}
            </div>
          </li>
        ))}
      </ul>
      <button
        onClick={handleShowMore}
        className={styles.who_to_follow_show_more}
      >
        {showMore ? "Show Less" : "Show More"}
      </button>
    </div>
  );
};

export default WhoToFollow;

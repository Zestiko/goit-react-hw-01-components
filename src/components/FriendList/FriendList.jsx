import { FriendListItem } from "./FriendListItem";
import css from "./FriendList.module.css"
import friends from '../../assets/friends.json'

export const FriendList = ({avatar, name, isOnline, id}) => {
    return <ul className={css.FriendList}>
        <FriendListItem avatar={avatar} name={name} isOnline={isOnline} key={id} />
    </ul>
}
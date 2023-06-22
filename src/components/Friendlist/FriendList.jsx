import PropTypes from 'prop-types'
import css from 'components/Friendlist/FriendList.module.css'
import { FriendListItem } from 'components/Friendlist/FriendListItem'

export const FriendList = ({ friends }) => {
    return (
        <ul className={css.friend_list}>
            {friends.map(friend => (
                <FriendListItem key={friend.id} friend={friend} />
            ))}  
        </ul>
    )
};

FriendList.propType = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
        id: PropTypes.number.isRequired,
    })).isRequired,
};
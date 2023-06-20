import PropTypes from 'prop-types'
import css from 'components/Friendlist/FriendList.module.css'

export const FriendListItem = ({ friend }) => {
    return (
        <li key={friend.id} className={css.item}>
            <span className={css.status}>{friend.isOnline}</span>
            <img className={css.avatar} src={friend.avatar} alt="User avatar" width="48" />
            <p className={css.name}>{friend.name}</p>
        </li>
    )
};

FriendListItem.propTypes = {
    friend: PropTypes.object.isRequired,
}
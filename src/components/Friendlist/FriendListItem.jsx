import PropTypes from 'prop-types'
import css from 'components/Friendlist/FriendList.module.css'

export const FriendListItem = ({ friend }) => {
    return (
        <li key={friend.id} className={css.item}>
            <span className={friend.isOnline ? css.onLine : css.offLine}></span>
            <img className={css.avatar} src={friend.avatar} alt="User avatar" width="68" />
            <p className={css.name}>{friend.name}</p>
        </li>
    )
};

FriendListItem.propTypes = {
    friend: PropTypes.shape({
        id: PropTypes.number.isRequired,
        isOnline: PropTypes.bool.isRequired,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
    }).isRequired,
};
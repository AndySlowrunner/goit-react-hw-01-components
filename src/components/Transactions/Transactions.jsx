import PropTypes from 'prop-types'
import css from 'components/Transactions/Transactions.module.css'

export const TransactionHistory = ({ items }) => {
    return (
        <table className={css.transaction_history}>
            <thead>
                <tr className={css.title_tr}>
                    <th className={css.title_th}>Type</th>
                    <th className={css.title_th}>Amount</th>
                    <th className={css.title_th}>Currency</th>
                </tr>
            </thead>

            <tbody>
                {items.map(item => (
                    <tr key={item.id}>
                        <td className={css.tbody_td}>{item.type}</td>
                        <td className={css.tbody_td}>{item.amount}</td>
                        <td className={css.tbody_td}>{item.currency}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        })).isRequired,
};
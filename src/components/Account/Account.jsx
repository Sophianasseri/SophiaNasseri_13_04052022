import PropTypes from 'prop-types';

/**
 * Component for rendering user account info
 *
 * @component
 * @example
 * const title = 'Argent Bank Savings'
 * const amount = '$5000'
 * const description = 'Available Balance'
 * return (
 *  <Account title={title} amount={amount} description={description} />
 * )
 */

const Account = ({ title, amount, description }) => {
  return (
    <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">{title}</h3>
        <p className="account-amount">{amount}</p>
        <p className="account-amount-description">{description}</p>
      </div>
      <div className="account-content-wrapper cta">
        <button className="transaction-button">View transactions</button>
      </div>
    </section>
  );
};
export default Account;

Account.propTypes = {
  /**
   * Account title
   */
  title: PropTypes.string,
  /**
   * Account amount
   */
  // We use a string here because we use placeholder data
  amount: PropTypes.string,
  /**
   * Account description
   */
  description: PropTypes.string,
};

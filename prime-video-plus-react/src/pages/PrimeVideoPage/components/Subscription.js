import styles from "./Subscription.module.css";

/* Styling in ReactJS
  0. global styles in index.css (Recommended)
  1. external styles for components with css modules (recommended)
  2. inline styles (not recommended)
  3. internal styles (not recommended)
  4. styled-components (TODO - RECOMMENDED)
*/

const Subscription = () => {
  // Internal Styles
  const renewStyles = {
    backgroundColor: "yellow",
    color: "#000",
    padding: "20px",
    border: "solid 3px #ccc",
  };

  const btnStyles = {
    backgroundColor: "red",
    color: "#fff",
    padding: "10px 20px",
    border: "solid 3px darkred",
    borderRadius: "10px",
  };

  return (
    <div className="text-center">
      {/* using external styles from bootstrap in the above line */}

      {/* using component-specific external css here through css modules */}
      <h3 className={styles.subscriptionInfo}>
        You are an Active Subscriber of Prime Video
      </h3>
      {/* Inline Styles - NEVER EVER TRY IN LISTS / loops */}
      <p
        style={{
          backgroundColor: "red",
          color: "#fff",
          padding: "20px",
          border: "solid 3px #ccc",
        }}
      >
        Your Premium Plan is ending in 2 weeks
      </p>

      {/* Internal styles */}
      <p style={renewStyles}>
        Renew now to enjoy 50% discount. Use Coupon Code: OFFER50 during
        checkout
      </p>
      <button style={btnStyles}>RENEW NOW</button>
    </div>
  );
};

export default Subscription;

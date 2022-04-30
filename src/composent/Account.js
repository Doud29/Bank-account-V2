import account from "../account.json";

const Account = () => {
  return (
    <div className="account">
      {account.map((item) => {
        return (
          <>
            <div className={`header-account ${item.color}`}>
              <h1>{item.name}</h1>
              <p>{item.balance} €</p>
            </div>
            <div className="resume">
              {item.operations.map((item1) => {
                return (
                  <>
                    <div className="value">
                      <p>{item1.date}</p>
                      <p>{item1.description}</p>
                      <p>{item1.amount} €</p>
                    </div>
                  </>
                );
              })}
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Account;

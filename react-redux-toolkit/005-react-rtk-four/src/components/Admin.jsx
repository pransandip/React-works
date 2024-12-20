import cryptoRandomString from "crypto-random-string";

import {
  useAddAccountMutation,
  useDeleteAccountMutation,
  useGetAccountsQuery,
  useUpdateAccountMutation,
} from "../store/api/admin.slice";

const Admin = () => {
  const { data } = useGetAccountsQuery();
  const [addAccount] = useAddAccountMutation();
  const [deleteAccount] = useDeleteAccountMutation();
  const [updateAccount] = useUpdateAccountMutation();

  const randomId = cryptoRandomString({ length: 10 });

  return (
    <div className="card">
      <div className="container">
        <h4>
          <b>Admin Component</b>
        </h4>
        {data?.map((account, index) => {
          return (
            <p key={account.id}>
              {index + 1} : {account.id} : {account.amount}{" "}
              <button onClick={() => deleteAccount(account.id)}>
                Delete Account
              </button>{" "}
              <button
                onClick={() => updateAccount({ id: account.id, amount: 777 })}
              >
                Update Account
              </button>
            </p>
          );
        })}
        <button onClick={() => addAccount({ id: randomId, amount: 100 })}>
          Add Account
        </button>
      </div>
    </div>
  );
};

export default Admin;

import {
  useGetAccountsQuery,
  useAddAccountMutation,
  useDeleteAccountMutation,
  useUpdateAccountMutation,
} from "../../store/apis/adminSlice";

export default function Admin() {
  const { data } = useGetAccountsQuery(); // it will run Automatically because of GET req
  const [addAccount] = useAddAccountMutation(); // to run you have to call this because of POST req
  const [deleteAccount] = useDeleteAccountMutation();
  const [updateAccount] = useUpdateAccountMutation();

  return (
    <div className="card">
      <div className="container">
        <h4>
          <b>Admin Component</b>
        </h4>
        {data &&
          data.map((account, index) => {
            return (
              <p key={index + 1}>
                {account.id} : {account.amount}{" "}
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
        <button
          onClick={() =>
            addAccount({ id: String(data.length + 1), amount: 100 })
          }
        >
          Add Account
        </button>
      </div>
    </div>
  );
}

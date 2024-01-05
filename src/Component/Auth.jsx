import { constants } from "../Store/Constant";


function Auth({ user, setUser, group, setGroup }) {
  const handleChange = (e) => {
    const { name, checked } = e.target;
    let tempUser = user.map((user) =>
      user.authorizationKey === name
        ? { authorizationKey: user.authorizationKey, granted: checked }
        : user
    );
    setUser(tempUser);
  };

  
  return (
    <div>
      <h3>Authorisation</h3>
      <div>
        <select value={group} onChange={(e) => setGroup(e.target.value)}>
          <option>{constants.defaultGroup}</option>
          <option>Administrator</option>
          <option>Service</option>
        </select>
      </div>
      <div>
        <h4>Permission</h4>
        <div>
          {user.map((user, index) => (
            <div key={index}>
              <input
                type="checkbox"
                name={user.authorizationKey}
                checked={user.granted}
                id={user.authorizationKey}
                onChange={(e) => handleChange(e)}
              />
              <label htmlFor={user.authorizationKey}>{user.authorizationKey}</label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Auth;

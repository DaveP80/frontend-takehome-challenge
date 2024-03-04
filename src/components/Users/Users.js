import User from "../User/User";
import FilterBar from "../FilterBar/FilterBar";
import { useState } from "react";
import "./Users.css";

const Users = ({ users = [] }) => {
  const [showAll, setShowAll] = useState(true);
  const [filter, setFilter] = useState(() => {
    if (users.length > 0) {
      return [...new Set(users.map((item) => item.hobbies).flat())].map(
        (item) => ({
          item,
          enabled: true,
        }),
      );
    } else {
      return [];
    }
  });

  return (
    <article className="Users">
      <FilterBar setFilter={setFilter} filter={filter} />
      <div>
        <button type="click" onClick={() => setShowAll(true)}>
          Expand All
        </button>
        <button type="click" onClick={() => setShowAll(false)}>
          Collapse All
        </button>
      </div>
      {showAll ? (
        users.map((user) => {
          const { id } = user;
          return <User key={id} user={user} />;
        })
      ) : (
        <>Hidden List</>
      )}
    </article>
  );
};

export default Users;

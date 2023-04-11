import React, { useEffect, useState } from 'react';
import './DisplayInfo.scss';

const DisplayInfor = (props) => {
  const { listUser } = props;
  const [isShowHideListUser, setShowHideListUser] = useState(true);

  const handleShowHideListUser = () => {
    setShowHideListUser(!isShowHideListUser);
  };


  useEffect(() => {
    if(listUser.length ===0){
      alert("list uder ===0")
    }
    console.log("consolog useEffect")
  },[listUser]
  );
  console.log("call me render")
  return (
    <div className="display-infor-container">
      <div>
        <span onClick={handleShowHideListUser}>
          {isShowHideListUser === true ? 'Hide list user' : 'show list user'}
        </span>
      </div>
      {isShowHideListUser && (
        <>
          {listUser.map((user, index) => {

            return (
              <div key={user.id} className={+user.age > 18 ? 'green' : 'red'}>
                <div> my name: {user.name}</div>
                <div> my age:{user.age}</div>
                <div>
                  <button onClick={() => props.handelDeleteUser(user.id)}>Delete</button>
                </div>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};

export default DisplayInfor;

import React from 'react'
import * as axios from 'axios'
import defaultUserPhoto from '../../assets/images/usersDefaultImg0.jpg'


const Users = (props) => {

  let getUsers = () => {
    if(props.users.length === 0) {
      axios.get('https://social-network.samuraijs.com/api/1.0/users')
        .then( response => {
          props.setUsers(response.data.items)
        })
    }
  }


  
  // if(props.users.length === 0) {
  //   props.setUsers([
  //     {id:1, followed: true, name: 'Ivan', status: 'Hello world!', location: {city: 'Moscow', country: 'Russia'}, photoUrl: 'https://sun9-72.userapi.com/c858028/v858028560/1a8732/TwcinMTBV1U.jpg'},
  //     {id:2, followed: false, name: 'George', status: 'It\'s a nice weather today', location: {city: 'Edinbourgh', country: 'UK'}, photoUrl: 'https://sun9-72.userapi.com/c858028/v858028560/1a8732/TwcinMTBV1U.jpg'},
  //     {id:3, followed: true, name: 'Stan', status: 'Hi there', location: {city: 'Los Angeles', country: 'USA'}, photoUrl: 'https://sun9-72.userapi.com/c858028/v858028560/1a8732/TwcinMTBV1U.jpg'},
  //     {id:4, followed: true, name: 'Nikolay', status: 'Life is good', location: {city: 'Bremen', country: 'Germany'}, photoUrl: 'https://sun9-72.userapi.com/c858028/v858028560/1a8732/TwcinMTBV1U.jpg'},
  //     {id:5, followed: false, name: 'Semyon', status: 'It\'s me', location: {city: 'Oslo', country: 'Norway'}, photoUrl: 'https://sun9-72.userapi.com/c858028/v858028560/1a8732/TwcinMTBV1U.jpg'},
  //     {id:6, followed: false, name: 'Peter', status: 'Love my place', location: {city: 'Slutsk', country: 'Belarus'}, photoUrl: 'https://sun9-72.userapi.com/c858028/v858028560/1a8732/TwcinMTBV1U.jpg'},
  //     {id:7, followed: true, name: 'Lev', status: 'It\'s very good here', location: {city: 'Kiyv', country: 'Ukraine'}, photoUrl: 'https://sun9-72.userapi.com/c858028/v858028560/1a8732/TwcinMTBV1U.jpg'},
  //     {id:8, followed: true, name: 'Nick', status: 'OK, so nice', location: {city: 'Sydney', country: 'Australia'}, photoUrl: 'https://sun9-72.userapi.com/c858028/v858028560/1a8732/TwcinMTBV1U.jpg'},
  //     {id:9, followed: false, name: 'Mike', status: 'My new status', location: {city: 'Alice Springs', country: 'Australia'}, photoUrl: 'https://sun9-72.userapi.com/c858028/v858028560/1a8732/TwcinMTBV1U.jpg'},
  //     {id:10, followed: true, name: 'Sarah', status: 'Life is good too', location: {city: 'Bremen', country: 'Germany'}, photoUrl: 'https://sun9-72.userapi.com/c858028/v858028560/1a8732/TwcinMTBV1U.jpg'},
  //     {id:11, followed: false, name: 'Lisa', status: 'Enjoying', location: {city: 'Berlin', country: 'Germany'}, photoUrl: 'https://sun9-72.userapi.com/c858028/v858028560/1a8732/TwcinMTBV1U.jpg'},
  //     {id:12, followed: true, name: 'Hilda', status: 'Love my country', location: {city: 'Oslo', country: 'Norway'}, photoUrl: 'https://sun9-72.userapi.com/c858028/v858028560/1a8732/TwcinMTBV1U.jpg'},
  //   ])
  // }

  return <div>
    <button onClick={getUsers}>Get users</button>
    {
      props.users.map( u =>
        <div key={u.id}>
          <span>
            <div>
              {/* <img className={styles.userPhoto} src={u.photos.small != null ? u.photos.small : ''} alt="userPic"/> */}
              <img className={styles.userPhoto} src={u.photos.small != null ? u.photos.small : defaultUserPhoto} alt="userPic"/>
            </div>
            <div>
              { u.followed
                ? <button onClick={ () => { props.unfollow(u.id) } }>Unfollow</button>
                : <button onClick={ () => { props.follow(u.id) } }>Follow</button>
              }
            </div>
          </span>
          <span>
            <span>
              <div>{u.name}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{'u.location.city'}, {'u.location.country'}</div>
            </span>
          </span>
        </div>)
    }
  </div>
}

export default Users
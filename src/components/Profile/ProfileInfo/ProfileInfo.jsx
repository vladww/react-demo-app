import React from 'react'
import Preloader from '../../common/Preloader/Preloader'
import s from './ProfileInfo.module.css'
import ProfileStatusWithHooks from './ProfileStatusWithHooks'


const ProfileInfo = (props) => {
  if(!props.profile) {
    return <div className={s.photoPlaceholder}><Preloader /></div>
  }

  return (
    <div>
      <div className={s.descriptionBlock}>
        <div className={s.mainPhoto}>
          {props.profile.photos.large ?
            <img src={props.profile.photos.large} alt="profile" />
            :
            <img src="https://pbs.twimg.com/media/CH-aSOnUwAEC0N8.jpg" alt="basic pic" />
          }
        </div>
        <ProfileStatusWithHooks status={props.status} updateUserStatus={props.updateUserStatus} />
        {/* <div className={s.infoContainer}>

          <div className={s.fullName}>{props.profile.fullName}</div>

          <div className={s.mainPhoto}>
            { props.profile.photos.large ?
              <img src={props.profile.photos.large} alt="profile photo" />
              :
              <img src="https://pbs.twimg.com/media/CH-aSOnUwAEC0N8.jpg" alt="no photo" />
            }
          </div>

          { props.profile.aboutMe &&
          <div className={s.infoBox}>
            <div className={s.infoLabel}>О себе:</div>
            <div className={s.infoText}>{props.profile.aboutMe}</div>
          </div> }

          
          <div className={s.infoBox}>
            { props.profile.lookingForAJob ?
              <div className={s.infoLabel}>Ищет работу</div>
              :
              <div className={s.infoLabel}>Не ищет работу</div>
            }
          </div>

          { props.profile.lookingForAJobDescription && props.profile.lookingForAJob &&
          <div className={s.infoBox}>
            <div className={s.infoLabel}>Описание работы:</div>
            <div className={s.infoText}>{props.profile.lookingForAJobDescription}</div>
          </div> }
          
          { props.profile.contacts.mainLink &&       
            <div className={s.infoBox}>
              <a href={props.profile.contacts.mainLink.substring(0, 8) === 'https://' ?
                props.profile.contacts.mainLink : 'https://' + props.profile.contacts.mainLink
            } target="_blank">Основная ссылка</a>
            </div>
          }{props.profile.contacts.website &&
            <div className={s.infoBox}>
              <a href={props.profile.contacts.website.substring(0, 8) === 'https://' ?
                props.profile.contacts.website : 'https://' + props.profile.contacts.website}
                target="_blank">Вебсайт</a>
            </div>
          }{props.profile.contacts.facebook &&       
            <div className={s.infoBox}>
              <a href={props.profile.contacts.facebook.substring(0, 8) === 'https://' ?
                props.profile.contacts.facebook : 'https://' + props.profile.contacts.facebook}
                target="_blank">Facebook</a>
            </div>
          }{props.profile.contacts.github &&       
              <div className={s.infoBox}>
                <a href={props.profile.contacts.github.substring(0, 8) === 'https://' ?
                props.profile.contacts.github : 'https://' + props.profile.contacts.github}
                target="_blank">GitHub</a>
              </div>
          }{props.profile.contacts.instagram &&       
              <div className={s.infoBox}>
                <a href={props.profile.contacts.instagram.substring(0, 8) === 'https://' ?
                props.profile.contacts.instagram : 'https://' + props.profile.contacts.instagram }
                target="_blank">Instagram</a>
              </div>
          }{props.profile.contacts.twitter &&
            <div className={s.infoBox}>
              <a href={props.profile.contacts.twitter.substring(0, 8) === 'https://' ?
                props.profile.contacts.twitter : 'https://' + props.profile.contacts.twitter }
                target="_blank">Twitter</a>
            </div>
          }{props.profile.contacts.vk &&
            <div className={s.infoBox}>
              <a href={props.profile.contacts.vk.substring(0, 8) === 'https://' ?
                props.profile.contacts.vk : 'https://' + props.profile.contacts.vk }
                target="_blank">VK</a>
            </div>
          }{
            props.profile.contacts.youtube &&
            <div className={s.infoBox}>
              <a href={props.profile.contacts.youtube.substring(0, 8) === 'https://' ?
                props.profile.contacts.youtube : 'https://' + props.profile.contacts.youtube }
                target="_blank">YouTube</a>
            </div>
          }
        </div> */}
      </div>
    </div>
  )
}

export default ProfileInfo
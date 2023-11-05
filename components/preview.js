import React, {useState, useEffect} from 'react'
import {useTelegramWeb} from "../lib/telegramWeb";
import styles from '../styles/Home.module.css';


function Preview () {
  const tg = useTelegramWeb();
  tg.MainButton.setParams({text: 'Закрыть', is_visible: true}).onClick(() => {
    tg.close()
  });
  const [lessons, setLessons] = useState()
  useEffect(() => {
    const requestOptions = {
        method: 'GET',
        headers: { "Authorization": "Bearer patjwWYpmH9i2vk6n.ac5d32a4790e27c8cf63bc7763bb4ad5fd8aef3177c872447551cd39937e7f25"},
    };
    fetch('https://api.airtable.com/v0/appYXVwx6zw8wmTW3/members?filterByFormula=email%3D7', requestOptions)
       .then((response) => response.json())
       .then((data) => {
            setLessons(data.records[0].fields.lessonCount);
       })
       .catch((err) => {
          console.log(err.message);
       });
 }, []);
  return (
    <div
        className={styles.preview}
        style={{backgroundColor: 'var(--tg-theme-secondary-bg-color)'}}
    >
        {lessons && 
            <div
                className={styles.infoText}
                style={{
                    color: 'var(--tg-theme-text-color)', 
                    backgroundColor: 'var(--tg-theme-secondary-bg-color)'
                }}
            > 
                Осталось {8 - lessons} занятий
            </div>
        }
    </div>
  )
}

export default Preview

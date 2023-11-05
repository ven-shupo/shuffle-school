import React, {useState, useEffect} from 'react'
import {useTelegramWeb} from "../lib/telegramWeb";


function Preview () {
  const tg = useTelegramWeb();
  tg.MainButton.setParams({text: 'Закрыть', is_visible: true}).onClick(() => {
    tg.close()
  });
  const [lessons, setLessons] = useState(0)
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
      style={{backgroundColor: 'var(--tg-theme-bg-color)'}}
    >
        {lessons && 
            <div> У вас осталось {8 - lessons} занятий </div>
        }
    </div>
  )
}

export default Preview

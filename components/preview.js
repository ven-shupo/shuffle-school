import React, {useState} from 'react'
import Airtable from 'airtable';
import styles from '../styles/Home.module.css';
import {useTelegramWeb} from "../lib/telegramWeb";
import $ from 'jquery'; 


function Preview () {

  const tg = useTelegramWeb();
  tg.MainButton.setParams({text: 'Закрыть', is_visible: true}).onClick(() => {
    tg.close()
  });
  const [lessons, setLessons] = useState(0)
  var base = new Airtable({ apiKey: 'patjwWYpmH9i2vk6n.ac5d32a4790e27c8cf63bc7763bb4ad5fd8aef3177c872447551cd39937e7f25' }).base('appYXVwx6zw8wmTW3');
  console.log(base('members').select())
  return (
    <div
      style={{backgroundColor: 'var(--tg-theme-bg-color)'}}
    >
    </div>
  )
}

export default Preview

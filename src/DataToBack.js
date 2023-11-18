import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../src/App.css'

const DataToBackJS = () => {

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedComponent, setSelectedComponent] = useState('AUD');
  const [responseText, setResponseText] = useState('');

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleComponentChange = (event) => {
    setSelectedComponent(event.target.value);
  };

  const handleSubmit = () => {
    // Создание объекта с выбранной датой и компонентом
    const formData = {
      date: selectedDate,
      country: selectedComponent
    };
      fetch('http://localhost:8080/cbrf/currency', {
        method: 'post',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(formData)
      })
        .then(response => response.text())
        .then(responseText => {
          setResponseText(responseText)
        })
  };

  return (
    <div>
      <select value={selectedComponent} onChange={handleComponentChange}>
        <option value="AUD">AUD - Австралийский доллар</option>
        <option value="AZN">AZN - Азербайджанский манат</option>
        <option value="GBP">GBP - Фунт стерлингов Соединенного королевства</option>
        <option value="AMD">AMD - Армянских драмов</option>
        <option value="BYN">BYN - Белорусский рубль</option>
        <option value="BGN">BGN - Болгарский лев</option>
        <option value="BRL">BRL - Бразильский реал</option>
        <option value="HUF">HUF - Венгерских форинтов</option>
        <option value="HKD">HKD - Гонконгских долларов</option>
        <option value="DKK">DKK - Датских крон</option>
        <option value="USD">USD - Доллар США</option>
        <option value="EUR">EUR - Евро</option>
        <option value="INR">INR - Индийских рупий</option>
        <option value="KZT">KZT - Казахстанских тенге</option>
        <option value="CAD">CAD - Канадский доллар</option>
        <option value="KGS">KGS - Киргизских сомов</option>
        <option value="CNY">CNY - Китайских юаней</option>
        <option value="MDL">MDL - Молдавских леев</option>
        <option value="NOK">NOK - Норвежских крон</option>
        <option value="PLN">PLN - Польский злотый</option>
        <option value="RON">RON - Румынский лей</option>
        <option value="XDR">XDR - СДР (специальные права заимствования)</option>
        <option value="SGD">SGD - Сингапурский доллар</option>
        <option value="TJS">TJS - Таджикских сомони</option>
        <option value="TRY">TRY - Турецкая лира</option>
        <option value="TMT">TMT - Новый туркменский манат</option>
        <option value="UZS">UZS - Узбекских сумов</option>
        <option value="UAH">UAH - Украинских гривен</option>
        <option value="CZK">CZK - Чешских крон</option>
        <option value="SEK">SEK - Шведских крон</option>
        <option value="CHF">CHF - Швейцарский франк</option>
        <option value="ZAR">ZAR - Южноафриканских рэндов</option>
        <option value="KRW">KRW - Вон Республики Корея</option>
        <option value="JPY">JPY - Японских иен</option>
      </select>
      <DatePicker selected={selectedDate} onChange={handleDateChange}/>
      <button onClick={handleSubmit}>Отправить</button>
      <p>{responseText}</p>
    </div>
  );
};

export default DataToBackJS;
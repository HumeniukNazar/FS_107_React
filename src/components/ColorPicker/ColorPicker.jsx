import s from './ColorPicker.module.css';
import colors from '../../assets/colors';
import { useState } from 'react';
import clsx from 'clsx';
export const ColorPicker = () => {
  const [currentColor, setCurrentColor] = useState('white');
  const handleChangeColor = color => {
    setCurrentColor(color);
  }
  return (
    <section style={{backgroundColor: currentColor}} className={s.bgWrapper}>
      <div className={s.pallette}>
        <h1>Current color: {currentColor}</h1>
        <ul className={s.list}>
          {colors.map(item => (
            <li onClick={() => handleChangeColor(item.color)} className={s.item} key={item.id}>
              {item.color}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

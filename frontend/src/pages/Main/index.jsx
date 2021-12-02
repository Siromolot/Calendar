import React, {useRef, useState, useEffect} from 'react';
import Modal from "../../components/Modal";
import { useDispatch, useSelector } from "react-redux";
import Calendar from "../../components/Calendar";

const Main = () => {

  const {
    modal,
  } = useSelector(state => ({
    modal: state.modal.modal,
  }));

  const dispatch = useDispatch();

  // рефы для скрола
  const menuRef = useRef(null);

  return (
    <div className={'main'}>
      <div>
        Предновогодний скилл бустер
      </div>
      
      <div>
        Хочешь знать, какие навыки, скилы, технологии необходимы будущему
        профессионалу своего дела? Твои коллеги - технические лиды, руководители
         отделов, менеджеры и, возможно, ОН сам поделятся своим опытом и расскажут и
        покажут на что стоит обратить внимание в первую очередь
      </div>
      
      <div>
        Каждый день перед Новым Годом ты сможешь изучать по одной небольшой и несложной теме, но эта
        структурированность даст просто невероятный буст к твоему развитию!
      </div>
      
      <div>
        Все еще читаешь описание? Давно пора уже переходить к календарю! ))
      </div>
      
      <div>
        Успехов! И с наступающими зимними праздниками )
      </div>
      
      <Calendar />
      
      {
        modal ? <Modal /> : null
      }
    </div>
  );
}

export default Main;

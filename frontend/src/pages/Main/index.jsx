import React, {useRef, useState, useEffect} from 'react';
import Modal from "../../components/Modal";
import { useDispatch, useSelector } from "react-redux";
import Calendar from "../../components/Calendar";
import Header from "../../components/Header";
import './index.scss';

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
      
      <Header />
      
      <section className={'main__description'}>
        <p className={'main__border_text'}>
          Хочешь знать, какие навыки, скилы, технологии необходимы будущему
          профессионалу своего дела?
        </p>
        
        <p>
           Твои коллеги - технические лиды, руководители
           отделов, менеджеры и, возможно, ОН сам поделятся своим опытом и расскажут и
          покажут на что стоит обратить внимание в первую очередь
        </p>
        
        <p>
          Каждый день перед Новым Годом ты сможешь изучать по одной небольшой и несложной теме, но эта
          структурированность даст просто невероятный буст к твоему развитию!
        </p>
        
        <p>
          Все еще читаешь описание? Давно пора уже переходить к календарю! ))
        </p>
        
        <p>
          Успехов! И с наступающими зимними праздниками )
        </p>
      </section>
      
      <Calendar />
      
      {
        modal ? <Modal /> : null
      }
    </div>
  );
}

export default Main;

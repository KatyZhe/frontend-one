import { v4 as uuidv4 } from 'uuid';
import { useEffect, useState } from 'react';
import StickyBox from 'react-sticky-box';

import { Preview } from '../../components/Preview/Preview';
import { useNavigate } from 'react-router-dom';
import Filter from '../../components/Filter/Filter';
import { Footer } from '../../components/Footer/footer';
import './CatalogExperts.css';
import { Card } from '../../components/Card/card';

export const CatalogExecutors = props => {
  const { amountExpert, onStartCatalog } = props;
  const navigate = useNavigate();

  function num_word(value, words) {
    value = Math.abs(value) % 100;
    var num = value % 10;
    if (value > 10 && value < 20) return words[2];
    if (num > 1 && num < 5) return words[1];
    if (num === 1) return words[0];
    return words[2];
  }

  const returnCatalogTitle = num => {
    let title = num_word(num, [
      ' профессиональный фотограф и видеооператор',
      ' профессиональных фотографа и видеооператора',
      ' профессиональных фотографов и видеооператоров'
    ]);
    return title;
  };

  const catalogTitle = amountExpert
    ? returnCatalogTitle(amountExpert)
    : '100 профессиональных фотографов и видеооператоров';

  useEffect(() => {
    onStartCatalog();
  }, []);
  const users = [
    {
      name: 'Елена Прекрасная',
      profession: 'Фотограф',
      avatar:
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzOTAwNXwwfDF8c2VhcmNofDJ8fC1wb3J0cmFpdHxlbnwwfHx8fDE2OTIyMDU1NDZ8MA&ixlib=rb-4.0.3&q=80&w=1080',
      about:
        'Меня зовут Алена и я профессионально вижу и фотографирую даже тех, кто стесняется и говорит, что не фотогеничен🤍 За очень короткое время я создаю пространство, в котором человеку можно быть любым. Помогаю раскрыть индивидуальность через камеру и принять свои лучшие качества Если хотите получить эстетичные кадры и увидеть себя с новой стороны, буду рада познакомиться лично💌',
      price: 12345,
      id: '1',
      portfolio: [
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzOTAwNXwwfDF8c2VhcmNofDN8fC1wb3J0cmFpdHxlbnwwfHx8fDE2OTIyMDU1NDZ8MA&ixlib=rb-4.0.3&q=80&w=1080'
      ]
    },
    {
      name: 'Василиса Премудрая',
      profession: 'Фотограф, видеооператор',
      avatar:
        'https://images.unsplash.com/photo-1687360440491-702812c5728c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzOTAwNXwxfDF8c2VhcmNofDF8fC1wb3J0cmFpdHxlbnwwfHx8fDE2OTIyMDU1NDZ8MA&ixlib=rb-4.0.3&q=80&w=1080',
      about:
        'Меня зовут Алена и я профессионально вижу и фотографирую даже тех, кто стесняется и говорит, что не фотогеничен🤍 За очень короткое время я создаю пространство, в котором человеку можно быть любым. Помогаю раскрыть индивидуальность через камеру и принять свои лучшие качества Если хотите получить эстетичные кадры и увидеть себя с новой стороны, буду рада познакомиться лично💌',
      price: 5432,
      id: '2',
      portfolio: [
        'https://images.unsplash.com/photo-1544005313-94ddf0286df2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzOTAwNXwwfDF8c2VhcmNofDZ8fC1wb3J0cmFpdHxlbnwwfHx8fDE2OTIyMDU1NDZ8MA&ixlib=rb-4.0.3&q=80&w=1080'
      ]
    },
    {
      name: 'Елена Прекрасная',
      profession: 'Фотограф',
      avatar:
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzOTAwNXwwfDF8c2VhcmNofDJ8fC1wb3J0cmFpdHxlbnwwfHx8fDE2OTIyMDU1NDZ8MA&ixlib=rb-4.0.3&q=80&w=1080',
      about:
        'Меня зовут Алена и я профессионально вижу и фотографирую даже тех, кто стесняется и говорит, что не фотогеничен🤍 За очень короткое время я создаю пространство, в котором человеку можно быть любым. Помогаю раскрыть индивидуальность через камеру и принять свои лучшие качества Если хотите получить эстетичные кадры и увидеть себя с новой стороны, буду рада познакомиться лично💌',
      price: 12345,
      id: '1',
      portfolio: [
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzOTAwNXwwfDF8c2VhcmNofDN8fC1wb3J0cmFpdHxlbnwwfHx8fDE2OTIyMDU1NDZ8MA&ixlib=rb-4.0.3&q=80&w=1080'
      ]
    },
    {
      name: 'Елена Прекрасная',
      profession: 'Фотограф',
      avatar:
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzOTAwNXwwfDF8c2VhcmNofDJ8fC1wb3J0cmFpdHxlbnwwfHx8fDE2OTIyMDU1NDZ8MA&ixlib=rb-4.0.3&q=80&w=1080',
      about:
        'Меня зовут Алена и я профессионально вижу и фотографирую даже тех, кто стесняется и говорит, что не фотогеничен🤍 За очень короткое время я создаю пространство, в котором человеку можно быть любым. Помогаю раскрыть индивидуальность через камеру и принять свои лучшие качества Если хотите получить эстетичные кадры и увидеть себя с новой стороны, буду рада познакомиться лично💌',
      price: 12345,
      id: '1',
      portfolio: [
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzOTAwNXwwfDF8c2VhcmNofDN8fC1wb3J0cmFpdHxlbnwwfHx8fDE2OTIyMDU1NDZ8MA&ixlib=rb-4.0.3&q=80&w=1080'
      ]
    },
    {
      name: 'Василиса Премудрая',
      profession: 'Фотограф, видеооператор',
      avatar:
        'https://images.unsplash.com/photo-1687360440491-702812c5728c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzOTAwNXwxfDF8c2VhcmNofDF8fC1wb3J0cmFpdHxlbnwwfHx8fDE2OTIyMDU1NDZ8MA&ixlib=rb-4.0.3&q=80&w=1080',
      about:
        'Меня зовут Алена и я профессионально вижу и фотографирую даже тех, кто стесняется и говорит, что не фотогеничен🤍 За очень короткое время я создаю пространство, в котором человеку можно быть любым. Помогаю раскрыть индивидуальность через камеру и принять свои лучшие качества Если хотите получить эстетичные кадры и увидеть себя с новой стороны, буду рада познакомиться лично💌',
      price: 5432,
      id: '2',
      portfolio: [
        'https://images.unsplash.com/photo-1544005313-94ddf0286df2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzOTAwNXwwfDF8c2VhcmNofDZ8fC1wb3J0cmFpdHxlbnwwfHx8fDE2OTIyMDU1NDZ8MA&ixlib=rb-4.0.3&q=80&w=1080'
      ]
    },
    {
      name: 'Елена Прекрасная',
      profession: 'Фотограф',
      avatar:
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzOTAwNXwwfDF8c2VhcmNofDJ8fC1wb3J0cmFpdHxlbnwwfHx8fDE2OTIyMDU1NDZ8MA&ixlib=rb-4.0.3&q=80&w=1080',
      about:
        'Меня зовут Алена и я профессионально вижу и фотографирую даже тех, кто стесняется и говорит, что не фотогеничен🤍 За очень короткое время я создаю пространство, в котором человеку можно быть любым. Помогаю раскрыть индивидуальность через камеру и принять свои лучшие качества Если хотите получить эстетичные кадры и увидеть себя с новой стороны, буду рада познакомиться лично💌',
      price: 12345,
      id: '1',
      portfolio: [
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzOTAwNXwwfDF8c2VhcmNofDN8fC1wb3J0cmFpdHxlbnwwfHx8fDE2OTIyMDU1NDZ8MA&ixlib=rb-4.0.3&q=80&w=1080'
      ]
    },
    {
      name: 'Елена Прекрасная',
      profession: 'Фотограф',
      avatar:
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzOTAwNXwwfDF8c2VhcmNofDJ8fC1wb3J0cmFpdHxlbnwwfHx8fDE2OTIyMDU1NDZ8MA&ixlib=rb-4.0.3&q=80&w=1080',
      about:
        'Меня зовут Алена и я профессионально вижу и фотографирую даже тех, кто стесняется и говорит, что не фотогеничен🤍 За очень короткое время я создаю пространство, в котором человеку можно быть любым. Помогаю раскрыть индивидуальность через камеру и принять свои лучшие качества Если хотите получить эстетичные кадры и увидеть себя с новой стороны, буду рада познакомиться лично💌',
      price: 12345,
      id: '1',
      portfolio: [
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzOTAwNXwwfDF8c2VhcmNofDN8fC1wb3J0cmFpdHxlbnwwfHx8fDE2OTIyMDU1NDZ8MA&ixlib=rb-4.0.3&q=80&w=1080'
      ]
    },
    {
      name: 'Василиса Премудрая',
      profession: 'Фотограф, видеооператор',
      avatar:
        'https://images.unsplash.com/photo-1687360440491-702812c5728c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzOTAwNXwxfDF8c2VhcmNofDF8fC1wb3J0cmFpdHxlbnwwfHx8fDE2OTIyMDU1NDZ8MA&ixlib=rb-4.0.3&q=80&w=1080',
      about:
        'Меня зовут Алена и я профессионально вижу и фотографирую даже тех, кто стесняется и говорит, что не фотогеничен🤍 За очень короткое время я создаю пространство, в котором человеку можно быть любым. Помогаю раскрыть индивидуальность через камеру и принять свои лучшие качества Если хотите получить эстетичные кадры и увидеть себя с новой стороны, буду рада познакомиться лично💌',
      price: 5432,
      id: '2',
      portfolio: [
        'https://images.unsplash.com/photo-1544005313-94ddf0286df2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzOTAwNXwwfDF8c2VhcmNofDZ8fC1wb3J0cmFpdHxlbnwwfHx8fDE2OTIyMDU1NDZ8MA&ixlib=rb-4.0.3&q=80&w=1080'
      ]
    },
    {
      name: 'Елена Прекрасная',
      profession: 'Фотограф',
      avatar:
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzOTAwNXwwfDF8c2VhcmNofDJ8fC1wb3J0cmFpdHxlbnwwfHx8fDE2OTIyMDU1NDZ8MA&ixlib=rb-4.0.3&q=80&w=1080',
      about:
        'Меня зовут Алена и я профессионально вижу и фотографирую даже тех, кто стесняется и говорит, что не фотогеничен🤍 За очень короткое время я создаю пространство, в котором человеку можно быть любым. Помогаю раскрыть индивидуальность через камеру и принять свои лучшие качества Если хотите получить эстетичные кадры и увидеть себя с новой стороны, буду рада познакомиться лично💌',
      price: 12345,
      id: '1',
      portfolio: [
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzOTAwNXwwfDF8c2VhcmNofDN8fC1wb3J0cmFpdHxlbnwwfHx8fDE2OTIyMDU1NDZ8MA&ixlib=rb-4.0.3&q=80&w=1080'
      ]
    },
    {
      name: 'Елена Прекрасная',
      profession: 'Фотограф',
      avatar:
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzOTAwNXwwfDF8c2VhcmNofDJ8fC1wb3J0cmFpdHxlbnwwfHx8fDE2OTIyMDU1NDZ8MA&ixlib=rb-4.0.3&q=80&w=1080',
      about:
        'Меня зовут Алена и я профессионально вижу и фотографирую даже тех, кто стесняется и говорит, что не фотогеничен🤍 За очень короткое время я создаю пространство, в котором человеку можно быть любым. Помогаю раскрыть индивидуальность через камеру и принять свои лучшие качества Если хотите получить эстетичные кадры и увидеть себя с новой стороны, буду рада познакомиться лично💌',
      price: 12345,
      id: '1',
      portfolio: [
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzOTAwNXwwfDF8c2VhcmNofDN8fC1wb3J0cmFpdHxlbnwwfHx8fDE2OTIyMDU1NDZ8MA&ixlib=rb-4.0.3&q=80&w=1080'
      ]
    },
    {
      name: 'Василиса Премудрая',
      profession: 'Фотограф, видеооператор',
      avatar:
        'https://images.unsplash.com/photo-1687360440491-702812c5728c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzOTAwNXwxfDF8c2VhcmNofDF8fC1wb3J0cmFpdHxlbnwwfHx8fDE2OTIyMDU1NDZ8MA&ixlib=rb-4.0.3&q=80&w=1080',
      about:
        'Меня зовут Алена и я профессионально вижу и фотографирую даже тех, кто стесняется и говорит, что не фотогеничен🤍 За очень короткое время я создаю пространство, в котором человеку можно быть любым. Помогаю раскрыть индивидуальность через камеру и принять свои лучшие качества Если хотите получить эстетичные кадры и увидеть себя с новой стороны, буду рада познакомиться лично💌',
      price: 5432,
      id: '2',
      portfolio: [
        'https://images.unsplash.com/photo-1544005313-94ddf0286df2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzOTAwNXwwfDF8c2VhcmNofDZ8fC1wb3J0cmFpdHxlbnwwfHx8fDE2OTIyMDU1NDZ8MA&ixlib=rb-4.0.3&q=80&w=1080'
      ]
    },
    {
      name: 'Елена Прекрасная',
      profession: 'Фотограф',
      avatar:
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzOTAwNXwwfDF8c2VhcmNofDJ8fC1wb3J0cmFpdHxlbnwwfHx8fDE2OTIyMDU1NDZ8MA&ixlib=rb-4.0.3&q=80&w=1080',
      about:
        'Меня зовут Алена и я профессионально вижу и фотографирую даже тех, кто стесняется и говорит, что не фотогеничен🤍 За очень короткое время я создаю пространство, в котором человеку можно быть любым. Помогаю раскрыть индивидуальность через камеру и принять свои лучшие качества Если хотите получить эстетичные кадры и увидеть себя с новой стороны, буду рада познакомиться лично💌',
      price: 12345,
      id: '1',
      portfolio: [
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzOTAwNXwwfDF8c2VhcmNofDN8fC1wb3J0cmFpdHxlbnwwfHx8fDE2OTIyMDU1NDZ8MA&ixlib=rb-4.0.3&q=80&w=1080'
      ]
    },
    {
      name: 'Елена Прекрасная',
      profession: 'Фотограф',
      avatar:
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzOTAwNXwwfDF8c2VhcmNofDJ8fC1wb3J0cmFpdHxlbnwwfHx8fDE2OTIyMDU1NDZ8MA&ixlib=rb-4.0.3&q=80&w=1080',
      about:
        'Меня зовут Алена и я профессионально вижу и фотографирую даже тех, кто стесняется и говорит, что не фотогеничен🤍 За очень короткое время я создаю пространство, в котором человеку можно быть любым. Помогаю раскрыть индивидуальность через камеру и принять свои лучшие качества Если хотите получить эстетичные кадры и увидеть себя с новой стороны, буду рада познакомиться лично💌',
      price: 12345,
      id: '1',
      portfolio: [
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzOTAwNXwwfDF8c2VhcmNofDN8fC1wb3J0cmFpdHxlbnwwfHx8fDE2OTIyMDU1NDZ8MA&ixlib=rb-4.0.3&q=80&w=1080'
      ]
    },
    {
      name: 'Василиса Премудрая',
      profession: 'Фотограф, видеооператор',
      avatar:
        'https://images.unsplash.com/photo-1687360440491-702812c5728c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzOTAwNXwxfDF8c2VhcmNofDF8fC1wb3J0cmFpdHxlbnwwfHx8fDE2OTIyMDU1NDZ8MA&ixlib=rb-4.0.3&q=80&w=1080',
      about:
        'Меня зовут Алена и я профессионально вижу и фотографирую даже тех, кто стесняется и говорит, что не фотогеничен🤍 За очень короткое время я создаю пространство, в котором человеку можно быть любым. Помогаю раскрыть индивидуальность через камеру и принять свои лучшие качества Если хотите получить эстетичные кадры и увидеть себя с новой стороны, буду рада познакомиться лично💌',
      price: 5432,
      id: '2',
      portfolio: [
        'https://images.unsplash.com/photo-1544005313-94ddf0286df2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzOTAwNXwwfDF8c2VhcmNofDZ8fC1wb3J0cmFpdHxlbnwwfHx8fDE2OTIyMDU1NDZ8MA&ixlib=rb-4.0.3&q=80&w=1080'
      ]
    },
    {
      name: 'Елена Прекрасная',
      profession: 'Фотограф',
      avatar:
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzOTAwNXwwfDF8c2VhcmNofDJ8fC1wb3J0cmFpdHxlbnwwfHx8fDE2OTIyMDU1NDZ8MA&ixlib=rb-4.0.3&q=80&w=1080',
      about:
        'Меня зовут Алена и я профессионально вижу и фотографирую даже тех, кто стесняется и говорит, что не фотогеничен🤍 За очень короткое время я создаю пространство, в котором человеку можно быть любым. Помогаю раскрыть индивидуальность через камеру и принять свои лучшие качества Если хотите получить эстетичные кадры и увидеть себя с новой стороны, буду рада познакомиться лично💌',
      price: 12345,
      id: '1',
      portfolio: [
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzOTAwNXwwfDF8c2VhcmNofDN8fC1wb3J0cmFpdHxlbnwwfHx8fDE2OTIyMDU1NDZ8MA&ixlib=rb-4.0.3&q=80&w=1080'
      ]
    }
  ];

  return (
    <>
      <section className="catalog">
        <div className="catalog__info">
          <p className="catalog__city">Москва</p>
          <h1 className="catalog__title">{catalogTitle}</h1>
        </div>
        <div className={'catalog__container'}>
          <div className="catalog__filter">
            <StickyBox
              offsetTop={52}
              offsetBottom={52}
            >
              <Filter
                photo="Фотографы"
                video="Видеооператоры"
              />
            </StickyBox>
          </div>
          <div className="catalog__box">
            {users.map(user => (
              <Card
                user={user}
                key={uuidv4()}
              ></Card>
            ))}
            <button className="button_more">Показать ещё</button>
          </div>
        </div>
      </section>
    </>
  );
};

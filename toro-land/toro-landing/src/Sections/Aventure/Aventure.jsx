/* eslint-disable no-undef */
import React from 'react';
import { SwiperSlide } from 'swiper/react';
import SwiperCore, {
  Navigation,
  Pagination,
  A11y,
} from 'swiper';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';
import { Img } from '../../components';
import {
  Container,
  Box,
  Swiper,
  ButtonAventure,
} from './styles';
import { DataLayer } from '../../components/Track/DataLayer/DataLayer';

SwiperCore.use([Navigation, Pagination, A11y]);

const Aventure = ({ data, show, open }) => {
  return (
    <Swiper
      show={show}
      simulateTouch={false}
      allowTouchMove={false}
      navigation
      pagination
      open={open}
      onSlideNextTransitionEnd={e =>
        DataLayer.push(
          'Conteudo_ClicouNextTudoSobre',
          data[0].index
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .toLocaleLowerCase(),
          $(
            `#tudo-sobre-a-toro .swiper-container-initialized .swiper-wrapper`,
          )[0]
            .children[e.activeIndex - 1].querySelector('h3')
            .innerText.replace(/\s/g, '-')
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .toLocaleLowerCase(),
        )
      }
      onSlidePrevTransitionEnd={e =>
        DataLayer.push(
          'Conteudo_ClicouPrevTudoSobre',
          data[0].index
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .toLocaleLowerCase(),
          $(
            `#tudo-sobre-a-toro .swiper-container-initialized .swiper-wrapper`,
          )[0]
            .children[e.activeIndex + 1].querySelector('h3')
            .innerText.replace(/\s/g, '-')
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .toLocaleLowerCase(),
        )
      }
      // prettier-ignore
      onSlideChange={(parameter) => {
        let i = 1;
         // prettier-ignore
        // eslint-disable-next-line func-names
        $($(".swiper-container")[3]).find($('.swiper-wrapper')).find(".swiper-slide").each(function(index ) { 

        if ($(this).hasClass("swiper-slide-active")){
          const elementSwipper = $($(".swiper-container")[3]).find($('.swiper-wrapper'))
          let dest =  - (- parseInt($($(".swiper-slide-active")[3]).css("width"))) * (parameter.activeIndex) 
      
          // prettier-ignore
          /* eslint-disable */
          elementSwipper.css('transform', 'translateX(' + - dest + 'px)'); // eslint-disable-line;
        }
        i++;
        });

      }}
      loop
    >
      {data.map(item => (
        <SwiperSlide key={item.title}>
          <Container>
            <Box>
              <Img lg={item.image} />

              <div>
                <h2>{item.index}</h2>

                <h3
                  id={item.index
                    .normalize('NFD')
                    .replace(/[\u0300-\u036f]/g, '')
                    .toLocaleLowerCase()}
                >
                  {item.title}
                </h3>
                <p>{item?.description}</p>
                {item.index === 'Acessórios' ? (
                  <ButtonAventure>
                    <a href={item.link} target="_blank">
                      {item.btn}
                    </a>
                  </ButtonAventure>
                ) : (
                  <>
                    {item.index === 'Pacotes de Serviços' && (
                        <ButtonAventure>
                          <a href={item.link} target="_blank">
                            {item.btn}
                          </a>
                        </ButtonAventure>
                      )}
                  </>
                )}
                <span>
                  Próximo: <br /> <strong>{item?.next}</strong>
                </span>
              </div>
            </Box>
          </Container>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
export default Aventure;

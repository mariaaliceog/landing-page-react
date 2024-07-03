import { Swiper, SwiperSlide } from 'swiper/react';
import testimony1 from '../../assets/1_depoimento.svg';
import testimony2 from '../../assets/2_depoimento.svg';
import testimony3 from '../../assets/3_depoimento.svg';
import { Container, Content, Image } from './styles';

const data = [
    { id: '1', image: testimony1 },
    { id: '2', image: testimony2 },
    { id: '3', image: testimony3 },
    { id: '4', image: testimony1 },
    { id: '5', image: testimony2 },
    { id: '6', image: testimony3 },
]

const Slider = () => {
    return (
      <Container>
          <h1>Depoimentos dos alunos</h1>
          <Content>
            <Swiper
              slidesPerView={3}
              pagination={{clickable: true}}
              navigation
            >   
                {data.map((item)=> (
                    <SwiperSlide key={item.id}>                
                        <Image src={item.image}/> 
                    </SwiperSlide>
                ))}         
            </Swiper>
          </Content>
      </Container>
    )
}

export default Slider;
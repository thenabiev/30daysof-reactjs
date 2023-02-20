import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import aboutImg from '../assets/about.png'

const About = () => {
  return (
    <Container className='py-5 mt-5'>
        <Row xs={1} md={2} className='g-4'>
            <Col className='py-5'>
                <h2 className="">
                    Haqqımızda
                </h2>
                <p>
                    Vakansiya və iş elanları üçün hazırladığım bu demo saytda siz, elan titulu üzrə axtarış edə,  cari vakansiyalar və onlar haqqında detallara baxa bilərsiniz.
                    Həmçinin, "Admin" səhifəsindən əvvəlcə qeydiyyatdan keçib , daha sonra qeydiyyatdan keçdiyiniz user id və şifrə ilə şəxsi kabinetinə daxil ola bilərsiniz.
                    Əgər daha əvvəlcədən yerləşdirilmiş elanlarınız varsa , onlar "Elanlarım" başlığı altında siyahılanacaqdır . 
                    Yeni elan yerləşdirmək üçün altdakı formu doldurub təsdiqləmək lazımdır. Elan yerləşdirildiyi andan etibarən , ümumi vakansiyalar və admin paneldə göstəriləcəkdir.
                    Adminpaneldə yerləşən özünüzə aid elanı istədiyiniz vaxt silə bilərsiniz. 
                    Qeyd: Bu proyektdə autentifikasiya və s proseslər üçün heç bir backend texnologiyasından istifadə olunmayıb. Proyektin sadəcə frontend texnologiyasının imkanları ilə hazırlandığı üçün müəyyən çatışmazlıqların olması ehtimalı labüddür.
                </p>
            </Col>
            <Col>
                <div className="imgBox">
                    <img src={aboutImg} alt="" />
                </div>
            </Col>

        </Row>
        
    </Container>

  )
}

export default About
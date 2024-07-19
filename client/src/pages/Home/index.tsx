import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import ImageSlider from "~/components/ImageSlider";
import SlideShow from '~/components/Slideshow';
import { Row, Col, Menu } from 'antd'
import shoe1 from "~/assets/images/slider6.jpg"
import shoe4 from "~/assets/images/slider4.jpg"
import shoe5 from "~/assets/images/slider5.jpg"
import vans1 from "~/assets/images/vans1.jpg"
import vans2 from "~/assets/images/vans2.jpg"
import vans3 from "~/assets/images/vans3.jpg"
import vans4 from "~/assets/images/vans4.jpg"
import { useState } from 'react';
import axios from '~/util/axios.customize';
import { useContext } from 'react';
import { AuthContext } from '~/components/context/auth.context';
import { Spin } from "antd";
const Home = () => {
    const IMAGES = [
        shoe1, shoe4, shoe5
    ];
    const [currentImage, setCurrentImage] = useState(vans1);
    const [isShowDetailItem, setIsShowDetailItem] = useState(false);
    const { setAuth, appLoading, setAppLoading } = useContext(AuthContext);
    useEffect(() => {
        const fetchAccount = async () => {
            setAppLoading(true);
            const res = await axios.get(`/v1/api/account`);
            if (res && !res.message) {
                console.log('ok');
                setAuth({
                    isAuthenticated: true,
                    user: {
                        email: res.email,
                        name: res.name
                    },
                });

            }
            setAppLoading(false)

        }
        fetchAccount();
    }, [])
    return (
        <>
            {appLoading === true ?
                <div className="spinner">
                    <Spin spinning={appLoading} />
                </div> :
                <>
                    {/* <ImageSlider imageUrls={IMAGES} /> */}
                    <SlideShow />
                    <Row className='collection-row' >
                        <Col lg={6}>
                            <div className="collection-banner">
                                <h1>CLASSIC</h1>
                                <p>Bộ sưu tập cổ điển
                                    Những phiên bản bất tử
                                    từ năm 1966</p>
                                <button className='collection-banner-btn'>XEM THÊM</button>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="collection-item" >
                                <div className="collection-item-up"
                                    onMouseOver={() => setIsShowDetailItem(true)}
                                    onMouseOut={() => setIsShowDetailItem(false)}
                                >
                                    <img src={currentImage} alt="" className="collection-item-up-img" />


                                </div>
                                <div className="collection-item-down">
                                    <div className="collection-item-down-img" onClick={() => setCurrentImage(vans2)}>
                                        <img src={vans2} alt="" className="collection-item-down-img" />
                                    </div>
                                    <div className="collection-item-down-img" onClick={() => setCurrentImage(vans3)}>
                                        <img src={vans3} alt="" className="collection-item-down-img" />
                                    </div>
                                    <div className="collection-item-down-img" onClick={() => setCurrentImage(vans4)}>
                                        <img src={vans4} alt="" className="collection-item-down-img" />
                                    </div>
                                </div>
                                <p className="collection-item-name">VANS Old Skool Classic</p>
                                <div className="collection-item-price">
                                    <p className="collection-item-price-sale">1.500.000đ</p>
                                    <p className="collection-item-price-original">1.800.000đ</p>
                                </div>
                                <Link to={"/item-detail/1"} className="collection-item-up-detail" >Xem chi tiết</Link>

                            </div>
                        </Col>

                    </Row >
                </>
            }
        </>
    )
}

export default Home